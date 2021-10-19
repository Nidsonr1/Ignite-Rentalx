import { Category } from '../../../model/Category';
import { ICategoryRepository } from '../../../repositories/ICategoryRepository';


class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(): Category[] {
    const categories = this.categoryRepository.list();

    if(categories.length <= 0) {
      throw new Error("Categories does not registred!");
    }

    return categories;
  }
}

export { ListCategoriesUseCase }