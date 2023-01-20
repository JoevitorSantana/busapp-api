import { User } from "../../../../models/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepositoryInMemory implements IUsersRepository{
    private usersRepository: User[] = [];
    
    public async create({
        user_name,
        user_lastname,
        user_email,
        user_password,
    }: ICreateUserDTO): Promise<User> {
        const user = new User();

        Object.assign(user, {
            user_name,
            user_lastname,
            user_email,
            user_password
        });

        this.usersRepository.push(user);

        return user;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = this.usersRepository.find(user => user.user_email === email);
        return user;
    }
}