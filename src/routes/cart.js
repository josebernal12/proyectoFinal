import { Router } from 'express'
import { createCart, deleteCart, getCart, getCartById, uploadCart } from '../controllers/cart.controller.js'
import { esAdminRole } from '../middlewares/role.js'
import { validJWTPostman } from '../middlewares/valid-jwt-postman.js'
const router = Router()

router.get('/', getCart)
router.get('/:id', getCartById)
router.post('/', validJWTPostman, esAdminRole, createCart)
router.put('/:id', validJWTPostman, esAdminRole, uploadCart)
router.delete('/:id', validJWTPostman, esAdminRole, deleteCart)
export default router