import { CategoryRepository } from "../../../repositories/implementations/CategoryRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default () => {
  const categoryRepository =  new CategoryRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
  const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

  return listCategoriesController
}