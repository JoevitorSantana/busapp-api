import { UserClass } from "../../../../models/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepositoryInMemory implements IUsersRepository{
    private usersRepository: UserClass[] = [];
    
    public async create({
        user_name,
        user_lastname,
        user_email,
        user_password,
    }: ICreateUserDTO): Promise<void> {
        const user = new UserClass();

        Object.assign(user, {
            user_name,
            user_lastname,
            user_email,
            user_password
        });

        this.usersRepository.push(user);
    }

    public async findByEmail(email: string): Promise<UserClass | undefined> {
        const user = this.usersRepository.find(user => user.user_email === email);
        return user;
    }
}