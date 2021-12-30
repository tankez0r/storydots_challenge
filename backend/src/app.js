import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productos from './routes/productos';
import marca from './routes/marcas';
import login from './routes/login';
import producto_imagen from './routes/imagenes';
import asociaciones from './controllers/asociaciones.js';
import errorHandler from './middleware/errorHandler';




const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/productos/', productos);
app.use('/api/marcas/', marca);
app.use('/api/login/', login);
app.use('/api/producto_imagen/', producto_imagen);
asociaciones();
app.use(errorHandler);
export default app;
