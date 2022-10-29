import categoryModel from "../models/category.model.js";

class Category {
    constructor() {
        this.category = categoryModel
    }

    async getAll() {
        const response = await this.category.find().populate('product', 'name')
        return response
    }
    async getCategoryById(id) {
        const response = await this.category.findById(id).populate('product', 'name')
        return response
    }
    async createCategory(category) {
        const response = await this.category.create(category)
        return response
    }
    async updateCategory(id, category) {
        const response = await this.category.findByIdAndUpdate(id, category, { new: true }).populate('product', 'name')
        return response
    }
    async deleteCategory(id) {
        const response = await this.category.findByIdAndDelete(id).populate('product', 'name')
        return response
    }

}

export default Category