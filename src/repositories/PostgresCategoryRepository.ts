import { Category } from "../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";



class PostgresCategoryRepository implements ICategoryRepository{
  findByName(name: string): Category {
    console.log(name);
    throw new Error("Method not implemented.");
  }
  list(): Category[] {
    console.log('list utilizada')
    throw new Error("Method not implemented.");
  }
  create({name, description}: ICreateCategoryDTO): void {
    console.log(name, description);
    throw new Error("Method not implemented.");
  }
 
}

export { PostgresCategoryRepository }