import { v4 } from "uuid";

import * as mongoose from 'mongoose';

const UserSchema  = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    user_lastname: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
    },
    user_password: {
        type: String,
        required: true,
    },
    user_creation_date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    user_modification_date: {
        type: Date,
        default: Date.now,
        required: true,
    },
})

export default mongoose.model('User', UserSchema);

export class UserClass{
    user_id?: string;
    user_name: string;
    user_lastname: string;
    user_email: string;
    user_password: string;
    user_creation_date?: Date;
    user_modification_date?: Date;

    constructor(){}
}