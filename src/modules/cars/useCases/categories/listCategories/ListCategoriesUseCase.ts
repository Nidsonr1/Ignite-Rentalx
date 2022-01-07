import { inject, injectable } from 'tsyringe';

import { Category } from '../../../entities/Category';
import { ICategoryRepository } from '../../../repositories/ICategoryRepository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();

    if(!categories) {
      throw new Error("Categories does not registred!");
    }

    return categories;
  }
}

export { ListCategoriesUseCase }