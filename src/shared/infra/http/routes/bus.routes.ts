import { Router } from "express";
import { BusController } from "../../../../modules/travels/services/BusService/BusController";

const bus = Router();

const busController = new BusController();

bus.post('/create', busController.create);
bus.get('/list', busController.list);

export { bus };