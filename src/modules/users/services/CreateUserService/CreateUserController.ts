import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";
import { container } from 'tsyringe';

export class CreateUserController{
    public async create(request: Request, response: Response): Promise<Response>{
        const {
            user_name,
            user_lastname,
            user_email,
            user_password
        } = request.body;

        const createUser = container.resolve(CreateUserService);

        await createUser.execute({
            user_name,
            user_lastname,
            user_email,
            user_password
        });

        return response.json(createUser);
    }
}