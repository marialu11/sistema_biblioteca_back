import {Router} from 'express';
import {getLibros, createLibros} from '../controllers/libros.controller.js';


const router = Router();

router.get("/libros", getLibros);
router.post("/libros", createLibros);
router.put('/libros/:id')
router.delete('/libros/:id')
router.get('/libros/:id')

export default router;