import csvParse from "csv-parse"
import fs from "fs";

class ImportCategoryUseCase {

  execute(file: Express.Multer.File) {
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    stream.pipe(parseFile);

    parseFile.on("data", (line) => {
      console.log(line);
    })
  }
}

export { ImportCategoryUseCase }