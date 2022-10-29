import userModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { generateJWT } from "../helpers/generar-jwt.js";

class User {
  constructor() {
    this.user = userModel;
  }

  async getUser() {
    const response = this.user.find();
    return response;
  }
  async getUserById(id) {
    const response = this.user.findById(id);
    return response;
  }
  async createUser(user) {
    const response = new this.user(user)
    const salt = bcryptjs.genSaltSync()
    response.password = bcryptjs.hashSync(user.password, salt)
    response.save()
    const token = await generateJWT(response._id)
    return {
      response,
      token
    };
  }
  async updateUser(id, product) {
    const response = this.user.findByIdAndUpdate(id, product, { new: true });
    return response;
  }
  async deleteUser(id) {
    const response = this.user.findByIdAndDelete(id)
    return response
  }
}

export default User
