import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppErrors } from "../errors/AppErrors";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string
}

export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if(!authHeader) throw new AppErrors("token missing!", 401);

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, process.env.keySecretJWT) as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(user_id);
    
    if(!user) throw new AppErrors("User does not Exist", 401);
    
    next();
  } catch (error) {
    throw new AppErrors("Invalid Token", 401);
  }
}