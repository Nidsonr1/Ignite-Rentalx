import { inject, injectable } from 'tsyringe';

import { ISpecificationRepository } from '../../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest) {
    const specificationAlreadyExists = await this.specificationRepository.findByName(name);

    if(specificationAlreadyExists) {
      throw new Error("Specification already Exists!");
    }

    this.specificationRepository.create({ name, description });
  }
}

export {CreateSpecificationUseCase}