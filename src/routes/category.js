import { Router } from 'express'
import { createCategory, deleteCategory, getAll, getCategoryById, updateCategory } from '../controllers/category.controller.js'
import { esAdminRole } from '../middlewares/role.js'
import { validJWTPostman } from '../middlewares/valid-jwt-postman.js'
import { checkFieldByIdCategory, checkfieldCategory } from '../middlewares/validateField/category/category-validate.js'
// validJWTPostman
const router = Router()

router.get('/', getAll)
router.get('/:id', checkFieldByIdCategory, getCategoryById)
router.post('/', validJWTPostman, esAdminRole, checkfieldCategory, createCategory)
router.put('/:id', validJWTPostman, esAdminRole, checkFieldByIdCategory, updateCategory)
router.delete('/:id', validJWTPostman, esAdminRole, checkFieldByIdCategory, deleteCategory)

export default router