import { container } from 'tsyringe';
import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository';
import { CategoryRepository } from '../../modules/cars/repositories/implementations/CategoryRepository';

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);