import { container } from 'tsyringe';
import { Request, Response } from "express";
import { ListTravelsService } from './ListTravelsService';

export class ListTravelsController {
    public async listTravels(request: Request, response: Response): Promise<Response> {
        const listTravels = container.resolve(ListTravelsService);
        const travels = await listTravels.execute();
        return response.json(travels);
    }
}