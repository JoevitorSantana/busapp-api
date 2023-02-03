import { Router } from "express";
import { bus } from "./bus.routes";
import { cities } from "./cities.routes";
import { lines } from "./lines.routes";
import { travels } from "./travel.routes";
import { user } from "./user.routes";

const routes = Router();

routes.use('/travels', travels);
routes.use('/users', user);
routes.use('/cities', cities);
routes.use('/lines', lines);
routes.use('/bus', bus);

export {routes};