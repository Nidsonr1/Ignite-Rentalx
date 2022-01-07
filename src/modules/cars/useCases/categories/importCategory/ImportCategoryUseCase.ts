import csvParse from "csv-parse"
import fs from "fs";
import { inject, injectable } from 'tsyringe'

import { ICreateCategoryDTO, ICategoryRepository } from "../../../repositories/ICategoryRepository";

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categorysRepository: ICategoryRepository
  ) {}

  loadCategory(file: Express.Multer.File): Promise<ICreateCategoryDTO[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: ICreateCategoryDTO[] = [];
      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", (line) => {
          const [name, description] = line;

          categories.push({
            name, 
            description,
          });
      }).on("end", () => {
        resolve(categories);
      }).on("error", (err) => {
        reject(err);
      });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategory(file);
    
    categories.map(async (category) => {
      const { name, description } = category;

      const categoryAlreadyExist = await this.categorysRepository.findByName(name);
      
      if(!categoryAlreadyExist) {
        await this.categorysRepository.create({ name, description });
      }
    })
  }
}

export { ImportCategoryUseCase }