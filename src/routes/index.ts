import { Router } from 'express';

import { categoriesRoute } from './categories.routes';
import { specificationRoute } from './specifications.routes'

const routes = Router();

routes.use("/categories", categoriesRoute);
routes.use("/specifications", specificationRoute);

export { routes }