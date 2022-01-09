import { inject, injectable } from 'tsyringe'
import { AppErrors } from '../../../../../errors/AppErrors';

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

    if(specifications.length <= 0) {
      throw new AppErrors("Specifications does not registred!", 404);
    }

    return specifications;
  }
}


export { ListSpecificationUseCase }