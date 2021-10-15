import csvParse from "csv-parse"
import fs from "fs";
import { CategoryRepository } from "../../../repositories/implementations/CategoryRepository";


interface IImportCategories {
  name: string;
  description: string
}

class ImportCategoryUseCase {
  constructor(private categorysRepository: CategoryRepository) {}

  private loadCategory(file: Express.Multer.File): Promise<IImportCategories[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategories[] = [];
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
    
    categories.map((category) => {
      const { name, description } = category;

      const categoryAlreadyExist = this.categorysRepository.findByName(name);

      if(!categoryAlreadyExist) {
        this.categorysRepository.create({ name, description });
      }
    })
  }
}

export { ImportCategoryUseCase }