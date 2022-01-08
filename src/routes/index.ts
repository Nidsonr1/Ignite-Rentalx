import { Router } from 'express';
import { authenticateRoute } from './authenticate.routes';

import { categoriesRoute } from './categories.routes';
import { specificationRoute } from './specifications.routes'
import { usersRoute } from './users.routes';

const routes = Router();

routes.use("/categories", categoriesRoute);
routes.use("/specifications", specificationRoute);
routes.use("/users", usersRoute);
routes.use(authenticateRoute);

export { routes }