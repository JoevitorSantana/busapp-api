import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";
import { container } from 'tsyringe';

/*
    # Tasks
        Adicionar o campo Documento
        
        Encriptar a Senha
        Atribuir tipo de Usuário
        Data de Criação e Modificação
        Implementar Usuário Administrador,
        Implementar usuário Funcionário,
            Funções,
            Vendedor,
            Motorista
        Implementar usuário Passageiro,

    # Validações
        Não deve ser possível cadastrar mesmos emails
        Senha deve ser maior que 6 caracteres e conter caracteres especiais
*/

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

        return response.status(200).json('OK');
    }
}