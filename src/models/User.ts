import { v4 } from "uuid";

export class User{
    user_id: string;
    user_name: string;
    user_lastname: string;
    user_email: string;
    user_password: string;
    user_creation_date: Date;
    user_modification_date: Date;

    constructor(){
        if(!this.user_id){
            this.user_id = v4();
        }
    }
}