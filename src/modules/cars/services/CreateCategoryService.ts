import { ICategoryRepository } from '../repositories/Interface/ICategoryRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoryRepository: ICategoryRepository){}

  execute({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if(categoryAlreadyExists) {
      throw new Error("Category already Exists!");
    }
  
    this.categoryRepository.create({ name, description });
  }

}

export { CreateCategoryService }