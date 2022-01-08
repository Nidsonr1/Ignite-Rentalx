import { Router } from "express";

import { AuthenticateUsersController } from "../modules/accounts/useCase/authenticate/AuthenticateUserController";

const authenticateRoute = Router();

const authenticateUsersController = new AuthenticateUsersController();

authenticateRoute.post("/sessions", authenticateUsersController.handle)

export { authenticateRoute }