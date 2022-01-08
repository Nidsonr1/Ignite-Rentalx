import { Router } from 'express'

const specificationRoute = Router();

import { CreateSpecificationController } from '../modules/cars/useCases/specifications/createSpecification/CreateSpecificationController';
import { ListSpecificationController }  from '../modules/cars/useCases/specifications/listSpecification/ListSpecificationController';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationRoute.use(ensureAuthenticate);
specificationRoute.post('/', createSpecificationController.handle);
specificationRoute.get('/', listSpecificationController.handle);

export { specificationRoute };