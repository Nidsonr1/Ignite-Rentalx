import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt'

import { ICreateUsersDTO } from '../../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { AppErrors } from '../../../../errors/AppErrors';


@injectable()
class CreateUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({name, email, password, driver_license}: ICreateUsersDTO) {
    const userAlreadyExist = await this.usersRepository.findByEmail(email);

    if(userAlreadyExist) throw new AppErrors("Email already registred", 400);

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