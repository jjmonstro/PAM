import { Router } from "express";
import { getCarros, getCarroById, createCarro } from "../controller/carrosController.js";
const router = Router();

router.get('/carros', getCarros )
router.get('/carros/:id', getCarroById )
router.post('/carros', createCarro )

export default router;