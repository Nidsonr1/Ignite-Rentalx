import { IUsersRepository } from '../IUsersRepository';
import { ICreateUsersDTO } from '../../../dtos/ICreateUserDTO';
import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/User';

class UsersRepository implements IUsersRepository{
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User);
  }
  
  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async create({name, username, email, password, driver_license}: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({
      name, 
      username, 
      email, 
      password, 
      driver_license
    });

    await this.repository.save(user);
  }

}

export { UsersRepository }