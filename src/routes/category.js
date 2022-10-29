import { Router } from 'express'
import { createCategory, deleteCategory, getAll, getCategoryById, updateCategory } from '../controllers/category.controller.js'
import { esAdminRole } from '../middlewares/role.js'
import { checkFieldByIdCategory, checkfieldCategory } from '../middlewares/validate-field.js'

const router = Router()

router.get('/', getAll)
router.get('/:id', checkFieldByIdCategory, getCategoryById)
router.post('/',  checkfieldCategory, createCategory)
router.put('/:id',  checkFieldByIdCategory, updateCategory)
router.delete('/:id',  checkFieldByIdCategory, deleteCategory)

export default router