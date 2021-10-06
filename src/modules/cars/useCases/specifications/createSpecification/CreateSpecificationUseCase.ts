import { ICreateSpecificationDTO, ISpecificationRepository } from '../../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository){}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists = this.specificationRepository.findByName(name);

    if(specificationAlreadyExists) {
      throw new Error("Specification already Exists!");
    }

    this.specificationRepository.create({ name, description });
  }
}

export {CreateSpecificationUseCase}