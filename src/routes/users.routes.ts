import { Router } from "express";
import multer from "multer";

import { CreateUsersController } from '../modules/accounts/useCase/createUsers/CreateUsersController';
import { UpdateUserAvatarController } from '../modules/accounts/useCase/updateUserAvatar/UpdateUserAvatarController';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import uploadConfig from "../config/upload";

const usersRoute = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUsersController = new CreateUsersController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoute.post("/", createUsersController.handle);
usersRoute.patch("/avatar", uploadAvatar.single("avatar"), ensureAuthenticate, updateUserAvatarController.handle);

export { usersRoute };