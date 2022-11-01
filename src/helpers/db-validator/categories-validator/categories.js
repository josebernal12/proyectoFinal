import categoryModel from '../../../models/category.model.js'

export const existIdCategory = async (id) => {

    const response = await categoryModel.findById(id);
    if (!response) {
        throw new Error(`no existe el id ${id} en la base de datos`);
    }
};



export const existCategory = async (name) => {
    const response = await categoryModel.findOne({ name });
    if (response) {
        throw new Error(`ya existe la categoria ${name} en la base de datos`);
    }
};