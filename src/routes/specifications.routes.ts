import { Router } from 'express'

const specificationRoute = Router();

import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRepository = new SpecificationRepository();

specificationRoute.post('/', (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(specificationRepository);

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

specificationRoute.get('/', (request, response) => {
  const all = specificationRepository.list();
  return response.json(all);
});

export { specificationRoute };