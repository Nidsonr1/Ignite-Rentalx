import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { CreateUsersUseCase } from './CreateUsersUseCase'

class CreateUsersController {

  async handle(request: Request, response: Response): Promise<Response>{
    try {
      const {name, email, password, driver_license} = request.body;

      const createUsersUseCase = container.resolve(CreateUsersUseCase);
      await createUsersUseCase.execute({ name, email, password, driver_license });

      return response.status(201).send();
    } catch (error) {
        return response.status(400).json(error.message);
    }
  }
}

export { CreateUsersController }