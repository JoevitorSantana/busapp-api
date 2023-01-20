import { Router } from "express";
import { CreateTravelController } from "../../../../modules/travels/services/CreateTravelService/CreateTravelController";
import { ListTravelsController } from "../../../../modules/travels/services/ListTravelsService/ListTravelsController";

const travels = Router();

const listTravels = new ListTravelsController();
const createTravel = new CreateTravelController();

travels.get('/list', listTravels.listTravels);
travels.post('/create', createTravel.create);

export { travels };