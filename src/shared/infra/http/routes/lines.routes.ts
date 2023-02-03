import { Router } from "express";
import { CityController } from "../../../../modules/travels/services/CityServices/CityController";

const lines = Router();

const cityController = new CityController();

lines.get('/list', cityController.listLines);
lines.get('/cities/:id', cityController.listCitiesOfLine);
lines.post('/create', cityController.createLines);
lines.get('/trajects/:line', cityController.listTrajectsOfLine);

export { lines };