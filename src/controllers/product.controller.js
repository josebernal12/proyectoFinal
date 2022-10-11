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
    console.log(error);
  }
};

const createdProduct = async (req, res) => {
  try {
    const { ...body } = req.body;

    

    const productCreated = await product.createProduct(body);
    

    res.json(productCreated);
  } catch (error) {
    res.json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await product.updatedProduct(id, req.body);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await product.deletedProduct(id);

    res.json({
      response,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  getProducts,
  getProductById,
  createdProduct,
  updateProduct,
  deleteProduct,
};
