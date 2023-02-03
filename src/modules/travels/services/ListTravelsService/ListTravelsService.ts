import { inject, injectable } from "tsyringe";
import { TravelClass } from "../../../../models/Travel";
import { ITravelRepository } from "../../repositories/ITravelRepository";

@injectable()
export class ListTravelsService{

    constructor(
        @inject('TravelsRepository')
        private travelsRepository: ITravelRepository,
    ){}

    public async execute():Promise<TravelClass[] | undefined>{
        let travels = await this.travelsRepository.list();
        return travels;
    }
}