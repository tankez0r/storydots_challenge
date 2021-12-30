import { Router } from 'express';
import { createImagen, deleteImagen, editImagen } from '../controllers/imagenProductoController';
import authorization from '../middleware/authorization';


const router = Router();

// crear imagen
router.post('/', authorization, createImagen);


// eliminar por id
router.delete('/:id', authorization, deleteImagen);

// editar imagen
router.put('/:id', authorization, editImagen);

export default router;
