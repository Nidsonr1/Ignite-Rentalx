import { Router } from "express";

import { CreateUsersController } from '../modules/accounts/useCase/createUsers/CreateUsersController';

const usersRoute = Router();

const createUsersController = new CreateUsersController();

usersRoute.post("/", createUsersController.handle);

export { usersRoute };