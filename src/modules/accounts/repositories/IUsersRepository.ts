import { ICreateUsersDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<void>;
  findByUsername(username: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository, ICreateUsersDTO }