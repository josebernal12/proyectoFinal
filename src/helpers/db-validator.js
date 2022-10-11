import userModel from "../models/user.model.js";
import productModel from "../models/product.model.js";

export const existId = async (id) => {
  const response = await userModel.findById(id);
  if (!response) {
    throw new Error(`no existe el id ${id} en la base de datos`);
  }
};
export const existIdProduct = async (id) => {
  const response = await productModel.findById(id);
  if (!response) {
    throw new Error(`no existe el id ${id} en la base de datos`);
  }
};
