import { Router } from 'express';

import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';



const categoriesRoute = Router();
const categoryRepository = new CategoryRepository();


categoriesRoute.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoute.get('/', (request, response) => {
  const all = categoryRepository.list();

  return response.json(all)
});

export { categoriesRoute }