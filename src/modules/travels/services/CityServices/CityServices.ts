import { inject, injectable } from "tsyringe";
import { CityClass } from "../../../../models/City";
import { Line, LineCity, Trajectory } from "../../../../models/Line";
import { ICreateCityDTO } from "../../dtos/ICreateCity";
import { ICitiesRepository } from "../../repositories/ICitiesRepository";

@injectable()
export class CityServices {
    constructor(
        @inject('CitiesRepository')
        private citiesRepository: ICitiesRepository
    ){};

    public async create({city_name, city_state}: ICreateCityDTO): Promise<void>{
        await this.citiesRepository.create({city_name, city_state});
    };

    public async list(): Promise<CityClass[] | undefined>{
        const cities = await this.citiesRepository.list();
        return cities;
    };

    public async createLine(line_description: string): Promise<void> {
        await this.citiesRepository.createLine(line_description);
    };

    public async listLines(): Promise<Line[] | undefined>{
        const lines = await this.citiesRepository.listLines();
        return lines;
    };

    public async listCitiesOfLines(line: number): Promise<LineCity[] | undefined>{
        const cities = await this.citiesRepository.listCitiesOfLine(line);
        return cities;
    };

    public async listTrajectoriesOfLines(line: number): Promise<Trajectory[] | undefined>{
        const trajects = await this.citiesRepository.listTrajectOfLine(line);
        return trajects;
    };

    public async createTrajects(line: number): Promise<void>{
        await this.citiesRepository.createTrajects(line);
    }
}