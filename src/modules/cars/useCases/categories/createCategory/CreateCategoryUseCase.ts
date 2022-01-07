import { inject, injectable } from 'tsyringe';

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
      throw new Error("Category already Exists!");
    }
  
    await this.categoryRepository.create({ name, description });
  }

}

export { CreateCategoryUseCase }