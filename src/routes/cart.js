import { Router } from 'express'
import { createCart, deleteCart, getCart, getCartById, uploadCart } from '../controllers/cart.controller.js'
const router = Router()

router.get('/', getCart)
router.get('/:id', getCartById)
router.post('/', createCart)
router.put('/:id', uploadCart)
router.delete('/:id', deleteCart)
export default router