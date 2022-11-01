import cartModel from "../../../models/cart.model.js";

export const existIdCart = async (id) => {
    const response = await cartModel.findById(id)
    if (!response) {
        throw new Error(`no existe el id ${id} en la base de datos`);
    }
};
export const existEmailCart = async (email) => {
    const response = await cartModel.findOne({ email: email })
    if (response) {
        throw new Error(`ya tienes vinculado el email ${email} a un carrito!`);
    }
};
