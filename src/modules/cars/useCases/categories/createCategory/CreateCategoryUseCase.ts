import { inject, injectable } from 'tsyringe';
import { AppErrors } from '../../../../../errors/AppErrors';

import { ICategoryRepository } from '../../../repositories/ICategoryRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(name);

    if(categoryAlreadyExists) {
      throw new AppErrors("Category already Exists!", 400);
    }
  
    await this.categoryRepository.create({ name, description });
  }

}

export { CreateCategoryUseCase }