import { inject, injectable } from 'tsyringe';

import { ICreateUsersDTO } from '../../repositories/IUsersRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';


@injectable()
class CreateUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({name, email, password, driver_license}: ICreateUsersDTO) {
    const userAlreadyExist = await this.usersRepository.findByEmail(email);

    if(userAlreadyExist) throw new Error("Email already registred")

    await this.usersRepository.create({
      name,
      email,
      password,
      driver_license
    });
  }
}

export { CreateUsersUseCase }