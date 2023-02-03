import { Request, Response } from "express";
import { container } from "tsyringe";
import { CityServices } from "./CityServices";

export class CityController {
    public async create(request: Request, response: Response): Promise<Response>{
        const { city_name, city_state } = request.body;

        const createService = container.resolve(CityServices);

        await createService.create({
            city_name, city_state
        });

        return response.status(200).send();
    };

    public async list(request: Request, response: Response): Promise<Response>{
        const listService = container.resolve(CityServices);

        const cities = await listService.list();

        return response.json(cities);
    };

    public async createLines(request: Request, response: Response): Promise<Response>{
        const { line_description } = request.body;

        const createService = container.resolve(CityServices);

        await createService.createLine(line_description);

        return response.status(200).send();
    };

    public async listLines(request: Request, response: Response): Promise<Response>{
        const listService = container.resolve(CityServices);

        const lines = await listService.listLines();

        return response.json(lines);
    };

    public async listCitiesOfLine(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const listService = container.resolve(CityServices);

        const intLine = parseInt(id);

        const cities = await listService.listCitiesOfLines(intLine);

        return response.json(cities);
    };

    public async listTrajectsOfLine(request: Request, response: Response): Promise<Response>{
        const { line } = request.params;

        const listService = container.resolve(CityServices);

        const intLine = parseInt(line);

        const cities = await listService.listTrajectoriesOfLines(intLine);

        return response.json(cities);
    };

    public async createTrajectsOfLine(request: Request, response: Response): Promise<Response>{
        const { line } = request.body;

        const cityService = container.resolve(CityServices);

        await cityService.createTrajects(line);

        return response.status(200).send();
    };
}