import { CategoryRepository } from '../../repositories/CategoryRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';



const createRepository = new CategoryRepository();
const createCategoryUseCase = new CreateCategoryUseCase(createRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };