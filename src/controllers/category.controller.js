import { handleHtpp } from "../helpers/error.handle.js";
import Category from "../services/category.services.js";
const category = new Category()

const getAll = async (req, res) => {
    try {
        const response = await category.getAll()
        res.json({ response })

    } catch (error) {
        handleHtpp(res, 'ERROR EN GET ALL CATEGORIES', error)
    }
}
const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params
        const response = await category.getCategoryById(id)
        res.json({ response })
    } catch (error) {
        handleHtpp(res, 'ERROR EN GET CATEGORY BY ID', error)
    }
}
const createCategory = async (req, res) => {
    try {
        const response = await category.createCategory(req.body)
        res.json({ response })
    } catch (error) {
        handleHtpp(res, 'ERROR EN CREATE CATEGORY', error)
    }
}
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params
        const response = await category.updateCategory(id, req.body)
        res.json({ response })
    } catch (error) {
        handleHtpp(res, 'ERROR EN UPDATE CATEGORY', error)
    }
}
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params
        const response = await category.deleteCategory(id)
        res.json({ response })
    } catch (error) {
        handleHtpp(res, 'ERROR EN DELETE CATEGORY', error)
    }
}
export {
    getAll,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}