import { Router } from 'express'
import { createCart, deleteCart, getCart, getCartById, uploadCart } from '../controllers/cart.controller.js'
import { esAdminRole } from '../middlewares/role.js'
import { validJWTPostman } from '../middlewares/valid-jwt-postman.js'
import { checkFieldByIdCart, validateFieldCart } from '../middlewares/validateField/cart/cart-validate.js'
const router = Router()

router.get('/', getCart)
router.get('/:id', checkFieldByIdCart, getCartById)
router.post('/', validJWTPostman, esAdminRole, validateFieldCart, createCart)
router.put('/:id', validJWTPostman, esAdminRole, checkFieldByIdCart, uploadCart)
router.delete('/:id', validJWTPostman, esAdminRole, checkFieldByIdCart, deleteCart)
export default router