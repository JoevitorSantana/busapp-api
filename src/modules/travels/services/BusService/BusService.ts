import { inject, injectable } from "tsyringe";
import { Bus } from "../../../../models/Bus";
import { ICreateBusDTO } from "../../dtos/ICreateBus";
import { ITravelRepository } from "../../repositories/ITravelRepository";

@injectable()
export class BusService {
    constructor(
        @inject('TravelsRepository')
        private travelsRepository: ITravelRepository
    ){}
    public async create({bus_model, bus_brand, bus_plate, bus_number_of_seats}: ICreateBusDTO): Promise<void> {
        await this.travelsRepository.createBus({
            bus_model, bus_brand, bus_plate, bus_number_of_seats
        });
    }

    public async list(): Promise<Bus[] | undefined>{
        return await this.travelsRepository.listBus();
    };
}