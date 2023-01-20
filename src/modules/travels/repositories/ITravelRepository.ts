import { Travel } from "../../../models/Travel";
import { ICreateTravelDTO } from "../dtos/ICreateTravelDTO";

export interface ITravelRepository{
    list(): Promise<Travel[] | undefined>;
    create(data: ICreateTravelDTO): Promise<Travel>;
}