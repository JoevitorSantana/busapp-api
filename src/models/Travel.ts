import * as mongoose from "mongoose";
import { v4 } from "uuid";
import { CityClass } from "./City";

const TravelSchema = new mongoose.Schema({
    travel_id: {
        type: String,
        required: true
    },
    from_city_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    to_city_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    boarding_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    landing_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    travel_create_date: {
        type: Date,
        default: Date.now
    },
    travel_update_date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Travel', TravelSchema);

export class TravelClass {
    travel_id: string;
    from_city_id: CityClass;
    to_city_id: CityClass;
    hour: Date;
    date: Date;
    boarding_id: CityClass;
    landing_id: CityClass;
    travel_create_date: Date;
    travel_update_date: Date

    constructor(){
        if(!this.travel_id) {
            this.travel_id = v4();
        }
    }
}

export class Trip {
    trip_id: number;
    trip_line: number;
    trip_date: Date;
    trip_hour: Date;
    trip_bus: number;
}