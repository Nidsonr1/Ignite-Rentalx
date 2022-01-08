import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt'

import { ICreateUsersDTO } from '../../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';


@injectable()
class CreateUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({name, email, password, driver_license}: ICreateUsersDTO) {
    const userAlreadyExist = await this.usersRepository.findByEmail(email);

    if(userAlreadyExist) throw new Error("Email already registred");

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license
    });
  }
}

export { CreateUsersUseCase }