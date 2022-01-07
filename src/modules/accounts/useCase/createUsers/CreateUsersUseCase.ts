import { inject, injectable } from 'tsyringe';

import { ICreateUsersDTO } from '../../repositories/IUsersRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';


@injectable()
class CreateUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({name, username, email, password, driver_license}: ICreateUsersDTO) {
    let userAlreadyExist = await this.usersRepository.findByUsername(username);

    if(userAlreadyExist) throw new Error("Username already exist");

    userAlreadyExist = await this.usersRepository.findByEmail(email);

    if(userAlreadyExist) throw new Error("Email already registred")

    await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driver_license
    });
  }
}

export { CreateUsersUseCase }