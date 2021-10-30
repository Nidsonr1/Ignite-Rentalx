import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  private static INSTANCE: CategoryRepository;  

  private constructor(){
    this.repository = getRepository(Category);
  };

  public static getInstance() {
    if(!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description
    });
  
    await this.repository.save(category)
  };

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoryRepository }