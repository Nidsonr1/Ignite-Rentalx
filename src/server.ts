import express from 'express';
import { categoriesRoute } from './routes/categories.routes';
import { specificationRoute } from './routes/specifications.routes';
const app = express();

app.use(express.json());
app.use("/categories", categoriesRoute);
app.use("/specifications", specificationRoute);

app.listen(3333, () => { console.log('Server is Running!') });