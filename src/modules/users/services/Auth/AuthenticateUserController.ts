import { Request, Response } from "express";
import { container } from 'tsyringe';
import { AuthenticateUserService } from "./AuthenticateUserService";

/*
    #Tasks
        Validações
        Esqueci minha senha
        Refresh Token
        Mensagens e Status de Erro para cada situação
*/

export class AuthenticateUserController{
    public async auth(request: Request, response: Response):Promise<Response>{
        const {email, password} = request.body;

        const authenticateUserService = container.resolve(AuthenticateUserService);

        const {user, token} = await authenticateUserService.execute({
            email, password
        });

        return response.json({
            user, token
        });
    }
}