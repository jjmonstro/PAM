import { Router } from "express";
import { getCarros, getCarroById, createCarro } from "../controller/carrosController.js";
import { getArma, getArmaById } from "../controller/armaController.js";
import { getBau, getBauById } from "../controller/bauController.js";
import { getMonstro, getMonstroById } from "../controller/monstroController.js";
import { getPersonagem, getPersonagemById } from "../controller/personagemController.js";
import { getPocao, getPocaoById } from "../controller/pocaoController.js";
import { getSala, getSalaById } from "../controller/salaController.js";
const router = Router();

router.get('/carros', getCarros )
router.get('/carros/:id', getCarroById )
router.post('/carros', createCarro )

router.get('/arma', getArma)
router.get('/arma/:id', getArmaById)

router.get('/bau', getBau)
router.get('/bau/:id', getBauById)

router.get('/monstro', getMonstro)
router.get('/monstro/:id', getMonstroById)

router.get('/personagem', getPersonagem)
router.get('/personagem/:id', getPersonagemById)

router.get('/pocao', getPocao)
router.get('/pocao/:id', getPocaoById)

router.get('/sala', getSala)
router.get('/sala/:id', getSalaById)

export default router;