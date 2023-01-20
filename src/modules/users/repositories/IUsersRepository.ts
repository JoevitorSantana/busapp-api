import { User } from "../../../models/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUsersRepository{
    create(data: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
}