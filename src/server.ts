import "dotenv/config";
import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import 'express-async-errors';
 
import "./database";
import "./shared/containers"
import { AppErrors } from './errors/AppErrors'
import { routes } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes)
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppErrors) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: 'Error',
    message: `Internal Server Error - ${err.message}`
  })
})

app.listen(3333, () => { console.log('🚀 Server is Running!') });