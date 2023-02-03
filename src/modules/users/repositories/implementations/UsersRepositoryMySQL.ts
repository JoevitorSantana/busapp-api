import { UserClass } from "../../../../models/User";
import { connect } from "../../../../shared/infra/database/db";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
import { RowDataPacket } from 'mysql2';

export class UsersRepositoryMySQL implements IUsersRepository{
    public async create({
        user_name,
        user_lastname,
        user_email,
        user_password
    }: ICreateUserDTO): Promise<void> {
        const conn = await connect();
        const sql = `
            INSERT INTO users (
                user_name,
                user_lastname,
                user_email,
                user_password
            )
            VALUES (?,?,?,?);
        `;

        const values = [user_name, user_lastname, user_email, user_password];
        await conn.query(sql, values);
    }
    public async findByEmail(email: string): Promise<UserClass | undefined> {
        const conn = await connect();
        const sql = `
            SELECT * 
            FROM users
            WHERE user_email = ? 
        `;
        const [result] = await conn.query<RowDataPacket[]>(sql, email);

        const user: UserClass = {
            user_id: '',
            user_name: '',
            user_lastname: '',
            user_email: '',
            user_password: '',
        };

        result.map((rs) => {
            user.user_id = rs.user_id;
            user.user_name = rs.user_name;
            user.user_lastname = rs.user_lastname;
            user.user_email = rs.user_email;
            user.user_password = rs.user_password;
        });

        return user;
    }

}