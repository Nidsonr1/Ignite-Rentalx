import { Specification } from '../../entities/Specification';
import { ISpecificationRepository, ICreateSpecificationDTO } from '../ISpecificationRepository';


class SpecificationRepository implements ISpecificationRepository{
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor(){
    this.specifications = [];
  };

  public static getInstance() {
    if(!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }
  
  list(): Specification[] {
    return this.specifications;
  };

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name, 
      description
    });

    this.specifications.push(specification);
  };

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    )
    return specification;
  };
}

export { SpecificationRepository }