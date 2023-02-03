import { Request, Response } from "express";
import { container } from "tsyringe";
import { BusService } from "./BusService";

export class BusController {
    public async create(request: Request, response: Response): Promise<Response>{
        const {bus_model, bus_brand, bus_plate, bus_number_of_seats} = request.body;

        const busService = container.resolve(BusService);

        await busService.create({
            bus_model, bus_brand, bus_plate, bus_number_of_seats
        });

        return response.status(200).send();
    }

    public async list(request: Request, response: Response): Promise<Response>{
        const busService = container.resolve(BusService);

        const vehicles = await busService.list();

        return response.json(vehicles);
    }
}