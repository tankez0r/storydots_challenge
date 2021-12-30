import { Router } from 'express';
import { createMarca, getMarcas, getMarca, deleteMarca, editMarca } from '../controllers/marcaController';
import authorization from '../middleware/authorization';


const router = Router();

// crear marca
router.post('/', authorization, createMarca);
// obtener marcas
router.get('/', getMarcas);
// obtener marca por id 
router.get('/:id', getMarca);

// eliminar por id
router.delete('/:id', authorization, deleteMarca);

// editar marca
router.put('/:id', authorization, editMarca);

export default router;
