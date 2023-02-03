import { Router } from "express";
import { CityController } from "../../../../modules/travels/services/CityServices/CityController";

const cities = Router();

const cityController = new CityController();

cities.get('/list', cityController.list);
cities.post('/create', cityController.create);
cities.post('/create/trajects', cityController.createTrajectsOfLine);

export { cities };