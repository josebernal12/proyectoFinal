import { handleHtpp } from "../helpers/error.handle.js";
import categoryModel from "../models/category.model.js";
import productServices from "../services/product.services.js";
const product = new productServices();
const getProducts = async (req, res) => {
  const response = await product.getAllProduct();

  res.json(response);
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await product.getAById(id);
    res.json({
      response,
    });
  } catch (error) {
    handleHtpp(res, 'ERROR EN GET PRODUCT ID', error)
  }
};

const createdProduct = async (req, res) => {
  try {
    const { ...body } = req.body;

    const productCreated = await product.createProduct(body);
    // res.json(productCreated)

    res.status(201).redirect("/templates/products");
  } catch (error) {
    handleHtpp(res, 'ERROR EN CREATE PRODUCT', error)
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await product.updatedProduct(id, req.body);
    // res.status(201).redirect("/templates/products");
    res.send(response)
  } catch (error) {
    handleHtpp(res, 'ERROR UPDATE PRODUCT', error)
  }
};

const deleteProduct = async (req, res) => {
  try {

    const { id } = req.params;

    const response = await product.deletedProduct(id);

    res.json(response)


    // res.json({
    //   response,
    // });
  } catch (error) {
    handleHtpp(res, 'ERROR EN DELETE PRODUCT', error)
  }
};


const productCategory = async (req, res) => {
  try {
    const { category } = req.params

    const response = await categoryModel.findById(category)
    res.json({ response })
  } catch (error) {
    handleHtpp(res, 'ERROR EN PRODUCT CATEGORY', error)

  }
}

export {
  getProducts,
  getProductById,
  createdProduct,
  updateProduct,
  deleteProduct,
  productCategory
};
