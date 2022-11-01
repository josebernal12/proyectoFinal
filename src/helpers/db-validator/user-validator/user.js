import userModel from "../../../models/user.model.js";

export const existId = async (id) => {
    const response = await userModel.findById(id);
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

export const existPhone = async (phone) => {
    const response = await userModel.findOne({ phone });
    if (response) {
        throw new Error(`ya existe el telefono ${phone} en la base de datos, revisar si esta correcto!`);
    }
};
