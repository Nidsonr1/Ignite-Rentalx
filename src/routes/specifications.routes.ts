import { Router } from 'express'

const specificationRoute = Router();

import { CreateSpecificationController } from '../modules/cars/useCases/specifications/createSpecification/CreateSpecificationController';
import { ListSpecificationController }  from '../modules/cars/useCases/specifications/listSpecification/ListSpecificationController';

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationRoute.post('/', createSpecificationController.handle);
specificationRoute.get('/', listSpecificationController.handle);

export { specificationRoute };