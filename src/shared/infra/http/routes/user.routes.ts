import { Router } from "express";
import { AuthenticateUserController } from "../../../../modules/users/services/Auth/AuthenticateUserController";
import { CreateUserController } from "../../../../modules/users/services/CreateUserService/CreateUserController";

const user = Router();
const createUserController = new CreateUserController();
const authUserController = new AuthenticateUserController();

user.post('/create', createUserController.create);
user.post('/login', authUserController.auth);

export { user };