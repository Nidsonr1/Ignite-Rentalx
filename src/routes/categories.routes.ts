import { Router } from 'express';
import multer from 'multer'

import { CreateCategoryController } from '../modules/cars/useCases/categories/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/categories/listCategories/ListCategoriesController';
import { ImportCategoryController} from '../modules/cars/useCases/categories/importCategory/ImportCategoryController';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import uploadConfig from '../config/upload';

const categoriesRoute = Router();
const upload = multer(uploadConfig.upload("./tmp/categories"));
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoute.use(ensureAuthenticate)
categoriesRoute.post('/', createCategoryController.handle);
categoriesRoute.get('/', listCategoriesController.handle);
categoriesRoute.post('/imports', upload.single('file'), importCategoryController.handle);

export { categoriesRoute }