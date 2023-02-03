import { Bus } from "../../../../models/Bus";
import { TravelClass, Trip } from "../../../../models/Travel";
import { ICreateBusDTO } from "../../dtos/ICreateBus";
import { ICreateTravelDTO } from "../../dtos/ICreateTravelDTO";
import { ICreateTripDTO } from "../../dtos/ICreateTrip";
import { SearchTrip } from "../../dtos/SearchTripDTO";
import { DateSearch } from "../implementations/TravelsRepositoryMySQL";
import { ITravelRepository } from "../ITravelRepository";

export class TravelRepositoryInMemory implements ITravelRepository{
    searchTrips(date: DateSearch, from: number, to: number): Promise<SearchTrip[] | undefined> {
        throw new Error("Method not implemented.");
    }
    createBus(data: ICreateBusDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    listBus(): Promise<Bus[] | undefined> {
        throw new Error("Method not implemented.");
    }
    createTrip(data: ICreateTripDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    listTrip(): Promise<Trip[] | undefined> {
        throw new Error("Method not implemented.");
    }
    
    private travelsRepository: TravelClass[] = [];

    public async list(): Promise<TravelClass[] | undefined> {
        let { travelsRepository } = this;
        return travelsRepository;
    }

    public async create({
        from_city_id, 
        to_city_id, 
        hour,
        date,
        boarding_id,
        landing_id
    }: ICreateTravelDTO): Promise<void> {
        const travel = new TravelClass();

        Object.assign(travel, {
            from_city_id, 
            to_city_id, 
            hour,
            date,
            boarding_id,
            landing_id
        });

        this.travelsRepository.push(travel);
    }
}