import { Router } from "express";
import { travels } from "./travel.routes";
import { user } from "./user.routes";

const routes = Router();

routes.use('/travels', travels);
routes.use('/users', user);

export {routes};