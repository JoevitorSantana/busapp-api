import { UserClass } from "../../../../models/User";
import {inject, injectable} from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface ICreateUser{
    user_name: string,
    user_lastname: string,
    user_email: string,
    user_password: string,
}

@injectable()
export class CreateUserService{

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ){}

    public async execute({
        user_name,
        user_lastname,
        user_email,
        user_password,
    }: ICreateUser): Promise<void>{
        const user = await this.usersRepository.create({
            user_name,
            user_lastname,
            user_email,
            user_password
        });
    }
}