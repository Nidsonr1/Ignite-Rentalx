import { Router } from 'express';

import { categoriesRoute } from './categories.routes';
import { specificationRoute } from './specifications.routes'
import { usersRoute } from './users.routes';

const routes = Router();

routes.use("/categories", categoriesRoute);
routes.use("/specifications", specificationRoute);
routes.use("/users", usersRoute);

export { routes }