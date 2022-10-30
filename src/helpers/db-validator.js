import userModel from "../models/user.model.js";
import productModel from "../models/product.model.js";
import categoryModel from '../models/category.model.js'

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
export const existIdCategory = async (id) => {
  const response = await categoryModel.findById(id);
  if (!response) {
    throw new Error(`no existe el id ${id} en la base de datos`);
  }
};
export const existUser = async (email) => {
  const response = await userModel.findOne({ email });
  if (response) {
    throw new Error(`ya existe el email ${email} en la base de datos`);
  }
};
export const existProduct = async (name) => {
  const response = await productModel.findOne({ name });
  if (response) {
    throw new Error(`ya existe el producto ${name} en la base de datos`);
  }
};
export const existCategory = async (name) => {
  const response = await categoryModel.findOne({ name });
  if (response) {
    throw new Error(`ya existe la categoria ${name} en la base de datos`);
  }
};
