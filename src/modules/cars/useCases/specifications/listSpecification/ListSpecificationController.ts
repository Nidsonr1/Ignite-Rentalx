import { Request, Response } from 'express'
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase){}
  
  handle(request: Request, response: Response): Response {
    try {
      const all = this.listSpecificationUseCase.execute();
      return response.json(all);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
  
} 


export { ListSpecificationController }