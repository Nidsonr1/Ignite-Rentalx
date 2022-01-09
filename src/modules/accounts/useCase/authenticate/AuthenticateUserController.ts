import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUsersUseCase } from './AuthenticateUsersUseCase';

class AuthenticateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUsersUseCase = container.resolve(AuthenticateUsersUseCase);
    const token = await authenticateUsersUseCase.execute({
      email,
      password
    });

    return response.json(token);
  }
}

export { AuthenticateUsersController }