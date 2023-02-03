import { CityClass } from "../../../../models/City";
import { connect } from "../../../../shared/infra/database/db";
import { ICreateCityDTO } from "../../dtos/ICreateCity";
import { ICitiesRepository } from "../ICitiesRepository";
import { RowDataPacket } from 'mysql2';
import { Line, LineCity, Trajectory } from "../../../../models/Line";

export class CitiesRepositoryMySQL implements ICitiesRepository{

    public async createTrajects(line: number): Promise<void> {
        const conn = await connect();

        const sql = `
            SELECT lc.line_city_id AS id, lc.city AS cidade, lc.line_ordenation AS ordem
            FROM line_city lc
            WHERE lc.line = ?
            ORDER BY lc.line_ordenation ASC;
        `;

        const [result] = await conn.query<RowDataPacket[]>(sql, line);

        const line_cities: LineCity[] = [];

        result.map(rs => {
            const line_city = {
                line_city_id: rs.id,
                city: rs.cidade,
                ordenation: rs.ordem
            }

            line_cities.push(line_city);
        });

        let counter = 1;

        line_cities.map((lc, i) =>{
            if(counter < line_cities.length){
                const insert = `
                    INSERT INTO trajectory (initial_line_city, final_line_city, traject_ordenation)
                    VALUES (?,?,?);
                `;
                const nextCity = line_cities[counter].line_city_id;
                const params = [lc.line_city_id, nextCity, counter];

                this.insertTraject(insert, params);
                counter++;
            };
        });
    }

    public async insertTraject(insert: string, params: (string | number)[]){
        const conn = await connect();
        await conn.query(insert, params);
    }
    
    public async listTrajectOfLine(line: number): Promise<Trajectory[] | undefined> {
        const conn = await connect();
        const sql = `
            SELECT tr.trajectory_id AS id, cI.city_name AS de, cF.city_name AS para, tr.traject_ordenation AS ordem
            FROM trajectory tr
            INNER JOIN line_city lcI ON lcI.line_city_id = tr.initial_line_city
            INNER JOIN city cI ON lcI.city = cI.city_id
            INNER JOIN line_city lcF ON lcF.line_city_id = tr.final_line_city
            INNER JOIN city cF ON lcF.city = cF.city_id
            WHERE lcI.line = ?;
        `;

        const [ result ] = await conn.query<RowDataPacket[]>(sql, line);

        const trajectories: Trajectory[] = [];

        result.map(rs => {
            const trajectory = {
                trajectory_id: rs.id,
                from: rs.de,
                to: rs.para,
                ordem: rs.ordem,
            };

            trajectories.push(trajectory);
        });

        return trajectories;
    };
    
    public async listCitiesOfLine(line: number): Promise<LineCity[] | undefined> {
        const conn = await connect();

        const sql = `
            SELECT lc.line_city_id AS id, c.city_name AS cidade, lc.line_ordenation AS ordem
            FROM line_city lc
            INNER JOIN city c ON lc.city = c.city_id
            WHERE lc.line = ?;
        `;

        const [result] = await conn.query<RowDataPacket[]>(sql, line);

        const line_cities: LineCity[] = [];

        result.map(rs => {
            const line_city = {
                line_city_id: rs.id,
                city: rs.cidade,
                ordenation: rs.ordem
            }

            line_cities.push(line_city);
        });

        return line_cities;
    };
    
    public async listLines(): Promise<Line[] | undefined> {
        const conn = await connect();

        const sql = `
            SELECT * FROM line;
        `;

        const [result] = await conn.query<RowDataPacket[]>(sql);

        const lines: Line[] = [];

        result.map(rs => {
            const line = {
                line_id: rs.line_id,
                line_description: rs.line_description
            };

            lines.push(line);
        });

        return lines;
    };
    
    public async createLine(line_description: string): Promise<void> {
        const conn = await connect();

        const sql = `
            INSERT INTO line (line_description) VALUES (?); 
        `;

        await conn.query(sql, line_description);
    };

    public async create({
        city_name,
        city_state
    }: ICreateCityDTO): Promise<void> {
        const conn = await connect();

        const sql = `
            INSERT INTO city (
                city_name,
                city_state
            ) VALUES (?,?);
        `;

        const values = [city_name, city_state];

        await conn.query(sql, values);
    }
    public async list(): Promise<CityClass[] | undefined> {
        const conn = await connect();
        const sql = `
            SELECT c.city_id AS id, c.city_name AS nome, s.state_name AS estado
            FROM city c
            INNER JOIN states s ON c.city_state = s.state_id;
        `;
        const [result] = await conn.query<RowDataPacket[]>(sql);

        const cities: CityClass[] = [];

        result.map(rs => {
            const city = {
                city_id: rs.id,
                city_name: rs.nome,
                city_state: rs.estado
            };

            cities.push(city);
        });

        return cities;
    }

}