import { Router } from "express";
import { travels } from "./travel.routes";

const routes = Router();

routes.use('/travels', travels);

export {routes};