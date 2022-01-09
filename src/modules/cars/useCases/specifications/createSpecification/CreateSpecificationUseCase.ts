import { inject, injectable } from 'tsyringe';
import { AppErrors } from '../../../../../errors/AppErrors';

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
      throw new AppErrors("Specification already Exists!", 400);
    }

    this.specificationRepository.create({ name, description });
  }
}

export {CreateSpecificationUseCase}