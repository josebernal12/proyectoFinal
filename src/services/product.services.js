import productModel from "../models/product.model.js";

class productServices {
  constructor() {
    this.products = productModel;
  }

  async getAllProduct() {
    const product = this.products.find().populate('category', 'name')
    return product;
  }

  async getAById(id) {
    const product = await this.products.findById(id).populate("user", "name").populate('category', 'name')
    return product;
  }
  async createProduct(createdProduct) {
    const product = this.products.create(createdProduct);
    return product;
  }

  async updatedProduct(id, product) {
    const response = await this.products.findByIdAndUpdate(id, product, {
      new: true,
    }).populate('category', 'name')
    return response;
  }

  async deletedProduct(id) {
    const response = await this.products.findByIdAndDelete(id).populate('category', 'name')
    return response;
  }
}
export default productServices
