import { Bus } from "../../../../models/Bus";
import Travel, { TravelClass, Trip } from "../../../../models/Travel";
import { ICreateBusDTO } from "../../dtos/ICreateBus";
import { ICreateTravelDTO } from "../../dtos/ICreateTravelDTO";
import { SearchTrip } from "../../dtos/SearchTripDTO";
import { ITravelRepository } from "../ITravelRepository";
import { DateSearch } from "./TravelsRepositoryMySQL";

export class TravelsRepositoryMongo implements ITravelRepository {
    searchTrips(date: DateSearch, from: number, to: number): Promise<SearchTrip[] | undefined> {
        throw new Error("Method not implemented.");
    }
    createTrip(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    listTrip(): Promise<Trip[] | undefined> {
        throw new Error("Method not implemented.");
    }
    createBus(data: ICreateBusDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    listBus(): Promise<Bus[] | undefined> {
        throw new Error("Method not implemented.");
    }
    public async list(): Promise<TravelClass[]> {
        const travels = await Travel.aggregate(
            [
                {
                    $lookup: {
                        from: "City",
                        localField: "from_city_id",
                        foreignField: "city_id",
                        as: "from_city_id"
                    }
                },
                {
                    $lookup: {
                        from: "City",
                        localField: "to_city_id",
                        foreignField: "city_id",
                        as: "to_city_id"
                    }
                },
                {
                    $lookup: {
                        from: "City",
                        localField: "boarding_id",
                        foreignField: "city_id",
                        as: "boarding_id"
                    }
                },
                {
                    $lookup: {
                        from: "City",
                        localField: "landing_id",
                        foreignField: "city_id",
                        as: "landing_id"
                    }
                }
            ]
        );

        return travels;
    }
    public async create({
        from_city_id, 
        to_city_id, 
        hour,
        date,
        boarding_id,
        landing_id
    }: ICreateTravelDTO): Promise<void> {
        await Travel.create({
            from_city_id, 
            to_city_id, 
            hour,
            date,
            boarding_id,
            landing_id
        });
    }

}