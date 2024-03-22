import express from 'express';
import librosRoutes from './routes/libros.routes.js';
import autoresRoutes from './routes/autores.routes.js';

const app = express();

//middlewares
//Para que el servidor entienda los datos que llegan del cliente en formato JSON
app.use(express.json())

app.use(librosRoutes)
app.use(autoresRoutes)

export default app;
