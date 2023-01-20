import { v4 } from "uuid";

export class Travel {
    travel_id: string;
    from_city_id: string;
    to_city_id: string;
    hour: Date;
    date: Date;
    boarding_id: string;
    landing_id: string;

    constructor(){
        if(!this.travel_id) {
            this.travel_id = v4();
        }
    }
}