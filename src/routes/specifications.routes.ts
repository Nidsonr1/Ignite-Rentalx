import { Router } from 'express'

const specificationRoute = Router();

import { CreateSpecificationController } from '../modules/cars/useCases/specifications/createSpecification/CreateSpecificationController';
import listSpecificationController  from '../modules/cars/useCases/specifications/listSpecification';

const createSpecificationController = new CreateSpecificationController();

specificationRoute.post('/', createSpecificationController.handle);

specificationRoute.get('/', (request, response) => {
  return listSpecificationController().handle(request, response);
});

export { specificationRoute };