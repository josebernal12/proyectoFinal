import Cart from '../models/cart.model.js'

class CartServices {
  constructor() {
    this.carts = Cart;
  }
  async getAllCart() {
    const response = await this.carts.find().populate({
      path: "order.product",
      model: "product",
    });
    return response;
  }
  async getById(id) {
    const response = await this.carts.findById(id);
    return response;
  }
  async createdCart(cart) {
    const response = await this.carts.create(cart);
    return response;
  }
  async updatedCart(id, cart) {
    const response = await this.carts.findByIdAndUpdate(id, cart).populate({
      path: "order.product",
      model: "product",
    });
    return response;
  }
  async deletedCart(id) {
    const response = await this.carts.findByIdAndDelete(id).populate({
      path: "order.product",
      model: "product",
    });
    return response;
  }
}
export default CartServices;

