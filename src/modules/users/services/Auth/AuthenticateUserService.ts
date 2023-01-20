import { User } from "../../../../models/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { inject, injectable } from 'tsyringe';
import { IHashProvider } from "../../../../shared/container/HashProvider/models/IHashProvider";
import { sign } from "jsonwebtoken";
import auth from "../../../../config/auth";

interface IRequest{
    email: string;
    password: string;
}

interface Response{
    user: User;
    token: string;
}

@injectable()
export class AuthenticateUserService{

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('HashProvider')
        private hashProvider: IHashProvider
    ){}

    public async execute({email, password}: IRequest): Promise<Response>{
        const user = await this.usersRepository.findByEmail(email);

        if (!user){
            throw new Error("user doesn't exists");
        }

        const passwordMatched = await this.hashProvider.compareHash(password, user.user_password);

        if(!passwordMatched){
            throw new Error('E-mail or password incorrect!');
        }

        const token = sign({}, auth.jwt.secret, {
            subject: user.user_id,
            expiresIn: auth.jwt.expiresIn
        })

        return {user, token};
    }
}