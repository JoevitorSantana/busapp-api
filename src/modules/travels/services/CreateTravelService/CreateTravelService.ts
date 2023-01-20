import {inject, injectable} from 'tsyringe';
import { Travel } from '../../../../models/Travel';
import { ITravelRepository } from '../../repositories/ITravelRepository';

interface ICreateTravel{
    from_city_id: string, 
    to_city_id: string, 
    hour: Date,
    date: Date,
    boarding_id: string,
    landing_id: string
}

@injectable()
export class CreateTravelService{

    constructor(
        @inject('TravelsRepository')
        private travelsRepository: ITravelRepository
    ){}

    public async execute({
        from_city_id, 
        to_city_id, 
        hour,
        date,
        boarding_id,
        landing_id
    }: ICreateTravel): Promise<Travel>{
        const travel = this.travelsRepository.create({
            from_city_id, 
            to_city_id, 
            hour,
            date,
            boarding_id,
            landing_id
        });

        return travel;
    }
}