import { Request, Response } from "express";
import { container } from 'tsyringe';
import { CreateTravelService } from "./CreateTravelService";

export class CreateTravelController{
    public async create(request: Request, response: Response): Promise<Response>{
        const {
            from_city_id, 
            to_city_id, 
            hour,
            date,
            boarding_id,
            landing_id
        } = request.body;

        const travel = container.resolve(CreateTravelService);

        await travel.execute({
            from_city_id, 
            to_city_id, 
            hour,
            date,
            boarding_id,
            landing_id
        });

        return response.json(travel);
    }
}