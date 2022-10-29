import Category from "../services/category.services.js";
const category = new Category()

const getAll = async (req, res) => {
    const response = await category.getAll()
    res.json({ response })
}
const getCategoryById = async (req, res) => {
    const { id } = req.params
    const response = await category.getCategoryById(id)
    res.json({ response })
}
const createCategory = async (req, res) => {
    const response = await category.createCategory(req.body)
    res.json({ response })
}
const updateCategory = async (req, res) => {
    const { id } = req.params
    const response = await category.updateCategory(id, req.body)
    res.json({ response })
}
const deleteCategory = async (req, res) => {
    const { id } = req.params
    const response = await category.deleteCategory(id)
    res.json({ response })
}
export {
    getAll,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}