import { UserClass } from "../../../models/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUsersRepository{
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<UserClass | undefined>;
}