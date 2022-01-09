import { inject, injectable } from 'tsyringe';
import { AppErrors } from '../../../../../errors/AppErrors';

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

    if(categories.length <= 0) {
      throw new AppErrors("Categories does not registred!", 404);
    }

    return categories;
  }
}

export { ListCategoriesUseCase }