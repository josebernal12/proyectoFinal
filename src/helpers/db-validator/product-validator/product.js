import productModel from "../../../models/product.model.js";

export const existIdProduct = async (id) => {
    const response = await productModel.findById(id);
    if (!response) {
        throw new Error(`no existe el id ${id} en la base de datos`);
    }
};

export const existProduct = async (name) => {
    const response = await productModel.findOne({ name });
    if (response) {
        throw new Error(`ya existe el producto ${name} en la base de datos`);
    }
};