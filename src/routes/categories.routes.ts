import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepository';
import { PostgresCategoryRepository } from '../repositories/PostgresCategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoute = Router();
const categoryRepository = new CategoryRepository();

categoriesRoute.post('/', (request, response) => {
  const { name, description } = request.body;

 const createCategoryService = new CreateCategoryService(categoryRepository);

 createCategoryService.execute({name, description})

  return response.status(201).send();
});

categoriesRoute.get('/', (request, response) => {
  const all = categoryRepository.list();

  return response.json(all)
});

export {categoriesRoute}