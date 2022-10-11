import productModel from "../models/product.model.js";

class productServices {
  constructor() {
    this.products = productModel;
  }

  async getAllProduct() {
    const product = this.products.find();
    return product;
  }

  async getAById(id) {
    const product = await this.products.findById(id).populate("user", "name");
    return product;
  }
  async createProduct(createdProduct) {
    // const productName = await this.products.findOne({
    //   nombre: createdProduct.nombre,
    // });
    // if (productName) throw "el producto ya existe";
    const product = this.products.create(createdProduct);
    console.log(product)
    return product;
  }

  async updatedProduct(id, product) {
    const response = await this.products.findByIdAndUpdate(id, product, {
      new: true,
    });
    return response;
  }

  async deletedProduct(id) {
    const response = await this.products.findByIdAndDelete(id);
    return response;
  }
}
export default productServices
