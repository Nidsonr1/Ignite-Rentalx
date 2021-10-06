import { Router } from 'express'

const specificationRoute = Router();

import { createSpecificationController } from '../modules/cars/useCases/specifications/createSpecification';
import { listSpecificationController } from '../modules/cars/useCases/specifications/listSpecification';


specificationRoute.post('/', (request, response) => {
 return createSpecificationController.handle(request, response);
});

specificationRoute.get('/', (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationRoute };