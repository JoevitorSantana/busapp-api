import { Travel } from "../../../../models/Travel";
import { ICreateTravelDTO } from "../../dtos/ICreateTravelDTO";
import { ITravelRepository } from "../ITravelRepository";

export class TravelRepositoryInMemory implements ITravelRepository{
    
    private travelsRepository: Travel[] = [];

    public async list(): Promise<Travel[] | undefined> {
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
    }: ICreateTravelDTO): Promise<Travel> {
        const travel = new Travel();

        Object.assign(travel, {
            from_city_id, 
            to_city_id, 
            hour,
            date,
            boarding_id,
            landing_id
        });

        this.travelsRepository.push(travel);

        return travel;
    }
}