import * as mongoose from 'mongoose';
import { v4 } from 'uuid';
import { StateClass } from './State';

const CitySchema = new mongoose.Schema({
    city_id: {
        type: String,
        required: true,
    },
    city_name: {
        type: String,
        required: true,
    },
    city_state_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'State',
        required: true,
    }
})

export default mongoose.model('City', CitySchema);

export class CityClass {
    city_id: number;
    city_name: string;
    city_state: number;

    constructor(){};
}