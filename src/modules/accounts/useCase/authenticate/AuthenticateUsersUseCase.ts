import { inject, injectable } from 'tsyringe';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { IUsersRepository } from '../../repositories/IUsersRepository';
import { AppErrors } from '../../../../errors/AppErrors'

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string
  },
  token: string;
}

@injectable()
class AuthenticateUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse>{
    const user = await this.usersRepository.findByEmail(email);

    if(!user) throw new AppErrors("Email or Password incorrect", 404);

    const passwordMatch = await compare(password, user.password);
    
    if(!passwordMatch) throw new AppErrors("Email or Password incorrect", 404);

    const token = sign({}, process.env.keySecretJWT, {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }

    return tokenReturn
  }
}

export { AuthenticateUsersUseCase }