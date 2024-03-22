import {Router} from 'express';
import {getAutores, createAutores, deleteAutores, updateAutores} from '../controllers/autores.controller.js';


const router = Router();

router.get("/autores", getAutores);
router.post("/autores", createAutores);
router.put('/autores/:id', updateAutores)
router.delete('/autores/:id', deleteAutores)
router.get('/autores/:id')

export default router;