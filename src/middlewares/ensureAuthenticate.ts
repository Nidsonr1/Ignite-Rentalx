import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string
}

export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if(!authHeader) throw new Error("token missing!");

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, process.env.keySecretJWT) as IPayload;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(user_id);

    if(!user) throw new Error("User does not Exist");
    
    next();
  } catch (error) {
    throw new Error("Invalid Token");
  }
}