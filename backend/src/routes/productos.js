import { Router } from 'express';
import { createProductos, getProductos, getProducto, deleteProducto, editProducto, getProductoByMarca } from '../controllers/productoController';
import authorization from '../middleware/authorization';

const router = Router();
// crear producto
router.post('/', authorization, createProductos);
// obtener productos
router.get('/', getProductos);
// obtener producto por id 
router.get('/:id', getProducto);
// obtener productos por marca
router.get('/:marca_id', getProductoByMarca);


// eliminar por id
router.delete('/:id', authorization, deleteProducto);

// editar marca
router.put('/:id', authorization, editProducto);

export default router;