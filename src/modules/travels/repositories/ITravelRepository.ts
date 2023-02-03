import { Bus } from "../../../models/Bus";
import { TravelClass, Trip } from "../../../models/Travel";
import { IBuyTicket } from "../dtos/IBuyTicket";
import { ICreateBusDTO } from "../dtos/ICreateBus";
import { ICreateTravelDTO } from "../dtos/ICreateTravelDTO";
import { ICreateTripDTO } from "../dtos/ICreateTrip";
import { ITiketView } from "../dtos/ITicketView";
import { SearchTrip } from "../dtos/SearchTripDTO";
import { DateSearch } from "./implementations/TravelsRepositoryMySQL";

export interface ITravelRepository{
    list(): Promise<TravelClass[] | undefined>;
    create(data: ICreateTravelDTO): Promise<void>;
    createBus(data: ICreateBusDTO): Promise<void>;
    listBus(): Promise<Bus[] | undefined>;
    createTrip(data: ICreateTripDTO): Promise<void>;
    listTrip(): Promise<Trip[] | undefined>;
    searchTrips(date: DateSearch, from: number, to: number): Promise<SearchTrip[] | undefined>;
    buyTicket(data: IBuyTicket): Promise<ITiketView | undefined>;
};