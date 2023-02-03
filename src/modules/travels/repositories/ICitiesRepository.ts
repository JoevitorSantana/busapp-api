import { CityClass } from "../../../models/City";
import { Line, LineCity, Trajectory } from "../../../models/Line";
import { ICreateCityDTO } from "../dtos/ICreateCity";

export interface ICitiesRepository {
    create(data: ICreateCityDTO): Promise<void>;
    list(): Promise<CityClass[] | undefined>;
    createLine(line_description: string): Promise<void>; 
    listLines(): Promise<Line[] | undefined>;
    listCitiesOfLine(line: number): Promise<LineCity[] | undefined>;
    listTrajectOfLine(line: number): Promise<Trajectory[] | undefined>;
    createTrajects(line: number): Promise<void>;
}