import { Category } from '../../model/Category';
import { ICategoryRepository } from '../../repositories/Interface/ICategoryRepository';


class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(): Category[] {
    const categories = this.categoryRepository.list();
    return categories;
  }
}

export { ListCategoriesUseCase }