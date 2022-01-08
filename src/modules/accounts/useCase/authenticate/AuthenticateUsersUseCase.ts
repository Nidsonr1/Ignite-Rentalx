import { inject, injectable } from 'tsyringe';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { IUsersRepository } from '../../repositories/IUsersRepository';

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

    if(!user) throw new Error("Email or Password incorrect");

    const passwordMatch = await compare(password, user.password);
    
    if(!passwordMatch) throw new Error("Email or Password incorrect");

    const token = sign({}, "3ec50d63cb1584af1fdc2bc25bffcd8c", {
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