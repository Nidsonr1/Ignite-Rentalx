import { Specification } from "../../../model/Specification";
import { SpecificationRepository } from "../../../repositories/implementations/SpecificationRepository";

class ListSpecificationUseCase {
  constructor(private specificationRepository: SpecificationRepository){}

  execute(): Specification[] {
    const specifications = this.specificationRepository.list();

    if(specifications.length <= 0) {
      throw new Error("Specifications does not registred!");
    }

    return specifications;
  }
}


export { ListSpecificationUseCase }