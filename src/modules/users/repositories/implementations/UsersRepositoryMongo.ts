import User, { UserClass } from "../../../../models/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepositoryMongo implements IUsersRepository{
    public async create({
        user_name,
        user_lastname,
        user_email,
        user_password,
    }: ICreateUserDTO): Promise<void> {
        await User.create({
            user_name,
            user_lastname,
            user_email,
            user_password,
        });
    }
    public async findByEmail(email: string): Promise<UserClass | undefined> {
        const user = await User.findOne({email});
        return user;
    }
}