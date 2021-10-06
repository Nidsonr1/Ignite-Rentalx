import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/categories/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/categories/listCategories';


const categoriesRoute = Router();


categoriesRoute.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoute.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoute }