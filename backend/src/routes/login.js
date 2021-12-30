import { Router } from 'express';
import { login } from '../controllers/loginUser';
const router = Router();

router.post('/', login);



export default router;