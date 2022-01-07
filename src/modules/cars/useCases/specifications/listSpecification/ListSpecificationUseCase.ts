import { inject, injectable } from 'tsyringe'

import { Specification } from "../../../entities/Specification";
import { ISpecificationRepository } from '../../../repositories/ISpecificationRepository';

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationRepository.list();

    if(!specifications) {
      throw new Error("Specifications does not registred!");
    }

    return specifications;
  }
}


export { ListSpecificationUseCase }