import { container } from 'tsyringe';

import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository';
import { CategoryRepository } from '../../modules/cars/repositories/implementations/CategoryRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
container.registerSingleton<ICategoryRepository>("CategoryRepository" ,CategoryRepository);
container.registerSingleton<ISpecificationRepository>("SpecificationRepository", SpecificationRepository);