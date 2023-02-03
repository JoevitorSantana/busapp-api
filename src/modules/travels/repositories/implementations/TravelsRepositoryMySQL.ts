import { Bus } from "../../../../models/Bus";
import { TravelClass, Trip } from "../../../../models/Travel";
import { connect } from "../../../../shared/infra/database/db";
import { ICreateBusDTO } from "../../dtos/ICreateBus";
import { ICreateTravelDTO } from "../../dtos/ICreateTravelDTO";
import { ITravelRepository } from "../ITravelRepository";
import { RowDataPacket } from 'mysql2';
import { ICreateTripDTO } from "../../dtos/ICreateTrip";
import { SearchTrip } from "../../dtos/SearchTripDTO";
import { IBuyTicket } from "../../dtos/IBuyTicket";
import { ITiketView } from "../../dtos/ITicketView";

export interface Seat {
    seat_number: number;
    seat_status: string;
}

export interface DateSearch {
    date: string;
}

export class TravelRepositoryMySQL implements ITravelRepository {
    public async buyTicket({
        ticket_trip,
        ticket_seat,
        ticket_initialTrajectory,
        ticket_finalTrajectory,
        ticket_user,
    }: IBuyTicket): Promise<ITiketView | undefined> {
        const conn = await connect();

        const sql = `
            INSERT INTO ticket (
                ticket_trip,
                ticket_seat,
                ticket_ini_trajectory,
                ticket_fin_trajectory,
                ticket_passenger,
                ticket_date_creation,
                ticket_date_modification
            ) VALUES (?,?,?,?,?,?,?);
        `;

        const params = [ticket_trip, ticket_seat, ticket_initialTrajectory, ticket_finalTrajectory, ticket_user, new Date(), new Date()];

        const updateSeatParams = [ticket_initialTrajectory, ticket_finalTrajectory, ticket_seat];

        const updateSeats = `
            UPDATE seats
            SET seat_status = 'Ocupado'
            WHERE seat_trajectory BETWEEN ? AND ?
            AND seat_number = ?;
        `;

        await conn.query<RowDataPacket[]>(updateSeats, updateSeatParams);

        await conn.query<RowDataPacket[]>(sql, params);

        const selectLastTicket = `
            SELECT tkt.ticket_id AS id, tkt.ticket_trip AS Viagem, l.line_description AS Descrição,
            c.city_name AS Partida, cF.city_name AS Destino, u.user_name AS Passageiro, tkt.ticket_seat AS Assento,
            tri.trip_hour AS Horário, DATE_FORMAT(tri.trip_date, '%d/%m/%Y') AS Data
            FROM ticket tkt
            INNER JOIN trajectory tr ON tr.trajectory_id = tkt.ticket_ini_trajectory
            INNER JOIN line_city lc ON lc.line_city_id = tr.initial_line_city
            INNER JOIN line l ON lc.line = l.line_id
            INNER JOIN city c ON c.city_id = lc.city
            INNER JOIN trajectory trF ON trF.trajectory_id = tkt.ticket_fin_trajectory
            INNER JOIN line_city lcF ON lcF.line_city_id = trF.final_line_city
            INNER JOIN city cF ON lcF.city = cF.city_id
            INNER JOIN users u ON u.user_id = tkt.ticket_passenger
            INNER JOIN trip tri ON tri.trip_id = tkt.ticket_trip
            ORDER BY tkt.ticket_date_creation DESC
            LIMIT 1;
        `;

        const [results] = await conn.query<RowDataPacket[]>(selectLastTicket);

        const tickets: ITiketView[] = []; 

        results.map(rs => {
            const ticket = {
                id: rs.id,
                Viagem: rs.Viagem,
                Descrição: rs.Descrição,
                Partida: rs.Partida,
                Destino: rs.Destino,
                Passageiro: rs.Passageiro,
                Assento: rs.Assento,
                Hora: rs.Horário,
                Data: rs.Data,
            };

            tickets.push(ticket); 
        });

        return tickets[0];
    };

    public async searchTrips(date: DateSearch, from: number, to: number): Promise<SearchTrip[] | undefined> {
        const conn = await connect();

        const sql = `
            SELECT tr.trip_id AS ID, DATE_FORMAT(tr.trip_date, '%d/%m/%Y') AS DATA, tr.trip_hour AS "HORA", cI.city_name AS "DE",
            cF.city_name AS "PARA", traI.trajectory_id AS InitialTrajectory, traF.trajectory_id AS FinalTrajectory
            FROM trip tr
            INNER JOIN line_city lcI ON tr.trip_line = lcI.line
            INNER JOIN trajectory traI ON traI.initial_line_city = lcI.line_city_id
            INNER JOIN city cI ON lcI.city = cI.city_id
            INNER JOIN line_city lcF ON tr.trip_line = lcF.line
            INNER JOIN trajectory traF ON traF.final_line_city = lcF.line_city_id
            INNER JOIN city cF ON lcF.city = cF.city_id
            WHERE cI.city_id = ?
            AND cF.city_id = ?
            AND tr.trip_date = ?;
        `;

        const params = [from, to, date.date];

        const [results] = await conn.query<RowDataPacket[]>(sql, params);

        const trips: SearchTrip[] = [];

        results.map(tr => {
            const trip = {
                trip_id: tr.ID,
                from: tr.DE,
                to: tr.PARA,
                date: tr.DATA,
                hour: tr.HORA,
                initialTrajectory: tr.InitialTrajectory,
                finalTrajectory: tr.FinalTrajectory,
            };

            trips.push(trip);
        });

        for(let i = 0; i < trips.length; i++) {
            async function query(sql: string, params:(string | number | undefined)[]){
                const conn = await connect();
                const [results] = await conn.query<RowDataPacket[]>(sql, params);
                const seats: Seat[] = [];

                results.map((rs) => {
                    const seat = {
                        seat_number: rs.seat_number,
                        seat_status: rs.seat_status,
                    };

                    for(let i = 0; i < seats.length; i++) {
                        if (seat.seat_number === seats[i].seat_number) {
                            seats[i].seat_status = "Ocupado";
                            return;
                        }
                    }

                    seats.push(seat);
                });

                return seats;
            }

            const sql = `
                SELECT seat_number, seat_status
                FROM seats
                WHERE seat_trajectory BETWEEN ? AND ? AND trip_id = ?
                GROUP BY seat_number, seat_status
                ORDER BY seat_number
            `;

            const params = [trips[i].initialTrajectory, trips[i].finalTrajectory, trips[i].trip_id];

            trips[i].seats = await query(sql, params);

        }

        return trips;
    };

    public async createTrip({trip_line, trip_date, trip_hour, trip_bus}: ICreateTripDTO): Promise<void> {
        const conn = await connect();

        const sql = `
            INSERT INTO trip (trip_line, trip_date, trip_hour, trip_bus, trip_creation_date, trip_modification_date)
            VALUES (?,?,?,?,?,?);
        `;

        const params = [trip_line, trip_date, trip_hour, trip_bus, new Date(), new Date()];

        const queryTrajectories = `
            SELECT trajectory_id
            FROM trajectory tr
            INNER JOIN line_city lc ON lc.line_city_id = tr.initial_line_city
            INNER JOIN line l ON lc.line = l.line_id
            WHERE l.line_id = ?
            ORDER BY tr.traject_ordenation ASC;
        `;

        const queryParams = [trip_line];

        const [result] = await conn.query<RowDataPacket[]>(queryTrajectories, queryParams);

        await conn.query(sql, params);

        const querySeatsBusNumber = 'SELECT bus_number_of_seats FROM bus WHERE bus_id = ?;';

        const [numberOfSeatsSelect] = await conn.query<RowDataPacket[]>(querySeatsBusNumber, trip_bus);

        const numberOfSeats = numberOfSeatsSelect[0].bus_number_of_seats;

        const [trip_id_query] = await conn.query<RowDataPacket[]>('SELECT trip_id FROM trip ORDER BY trip_creation_date DESC LIMIT 1;');

        const trip_id = trip_id_query[0].trip_id;

        const trajectories: any[] = [];

        result.map(traject => {
            const trajectory = {
                traject_id: traject.trajectory_id
            };

            trajectories.push(trajectory);
        });

        trajectories.map(traject => {
            for (let i = 1; i <= numberOfSeats; i++) {
                const status = 'Livre';
                const insertSeatsOfTrip = `
                    INSERT INTO seats (seat_number, seat_status, seat_trajectory, trip_id, trip_creation_date, trip_modification_date)
                    VALUES (?,?,?,?,?,?);
                `;

                const params = [i, status, traject.traject_id, trip_id, new Date(), new Date()];

                this.createSeatsOfTrip(insertSeatsOfTrip, params);
            }
        });
    };

    public async createSeatsOfTrip(insert: string, params: (string | number)[]): Promise<void> {
        const conn = await connect();
        await conn.query(insert, params);
        return;
    };

    public async listTrip(): Promise<Trip[] | undefined> {
        const conn = await connect();
        
        const sql = `
            SELECT tr.trip_id AS trip_id, l.line_description AS line_description, tr.trip_date 
            AS trip_date, tr.trip_hour AS trip_hour, b.bus_model AS trip_bus
            FROM trip tr
            INNER JOIN line l ON l.line_id = tr.trip_line
            INNER JOIN bus b ON b.bus_id = tr.trip_bus
        `;

        const [result] = await conn.query<RowDataPacket[]>(sql);

        const trips: Trip[] = [];

        result.map(rs => {
            const trip = {
                trip_id: rs.trip_id,
                trip_line: rs.line_description,
                trip_date: rs.trip_date,
                trip_hour: rs.trip_hour,
                trip_bus: rs.trip_bus
            };

            trips.push(trip);
        });

        return trips;
    };

    public async list(): Promise<TravelClass[] | undefined> {
        throw new Error("Method not implemented.");
    };
    public async create(data: ICreateTravelDTO): Promise<void> {
        throw new Error("Method not implemented.");
    };
    public async createBus({
        bus_model, bus_brand, bus_plate, bus_number_of_seats
    }: ICreateBusDTO): Promise<void> {
        const conn = await connect();

        const sql = `
            INSERT INTO bus (
                bus_model,
                bus_brand,
                bus_plate,
                bus_number_of_seats,
                bus_creation_date,
                bus_modification_date
            ) VALUES (?,?,?,?,?,?);
        `;

        const params = [bus_model, bus_brand, bus_plate, bus_number_of_seats, new Date(), new Date()];

        await conn.query(sql, params);
    };

    public async listBus(): Promise<Bus[] | undefined> {
        const conn = await connect();

        const sql = `
            SELECT bus_id, bus_model, bus_brand, bus_plate, bus_number_of_seats
            FROM bus;
        `;

        const [results] = await conn.query<RowDataPacket[]>(sql);

        const vehicles: Bus[] = []; 

        results.map(rs => {
            const bus = {
                bus_id: rs.bus_id,
                bus_model: rs.bus_model,
                bus_brand: rs.bus_brand,
                bus_plate: rs.bus_plate,
                bus_number_of_seats: rs.bus_number_of_seats
            };

            vehicles.push(bus);
        })

        return vehicles;
    };
};