import { inject, injectable } from "tsyringe";
import { TicketClass } from "../../../../models/Ticket";
import { Trip } from "../../../../models/Travel";
import { IBuyTicket } from "../../dtos/IBuyTicket";
import { ICreateTripDTO } from "../../dtos/ICreateTrip";
import { ITiketView } from "../../dtos/ITicketView";
import { SearchTrip } from "../../dtos/SearchTripDTO";
import { DateSearch } from "../../repositories/implementations/TravelsRepositoryMySQL";
import { ITravelRepository } from "../../repositories/ITravelRepository";

@injectable()
export class TripService {

    constructor(
        @inject('TravelsRepository')
        private travelsRepository: ITravelRepository
    ){}

    public async create({trip_line, trip_date, trip_hour, trip_bus}: ICreateTripDTO): Promise<void>{
        await this.travelsRepository.createTrip({trip_line, trip_date, trip_hour, trip_bus});
    }

    public async list(): Promise<Trip[] | undefined>{
        const trips = await this.travelsRepository.listTrip();
        return trips;
    }

    public async search(date: DateSearch, from: number, to: number): Promise<SearchTrip[] | undefined>{
        const trips = await this.travelsRepository.searchTrips(date, from, to);
        return trips;
    }

    public async buyTicket({
        ticket_trip,
        ticket_initialTrajectory,
        ticket_finalTrajectory,
        ticket_seat, 
        ticket_user
    }: IBuyTicket): Promise<ITiketView | undefined>{
        const ticket = await this.travelsRepository.buyTicket({ticket_trip, ticket_initialTrajectory, ticket_finalTrajectory, ticket_seat, ticket_user});
        return ticket;
    }
}