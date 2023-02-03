import { Seat } from "../repositories/implementations/TravelsRepositoryMySQL";

export interface SearchTrip {
    trip_id?: number;
    from: string;
    to: string;
    date: Date;
    hour: Date;
    seats?: Seat[];
    initialTrajectory?: number;
    finalTrajectory?: number;
}