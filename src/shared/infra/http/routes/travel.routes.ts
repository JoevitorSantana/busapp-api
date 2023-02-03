import { Router } from "express";
import { TripController } from "../../../../modules/travels/services/TripService/TripController";

const travels = Router();

const tripController = new TripController();

travels.post('/create', tripController.create);
travels.get('/list', tripController.list);
travels.get('/:from/:to', tripController.search);
travels.post('/ticket/buy', tripController.buy);

export { travels };