import { Router } from "express";
import {
  createdProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import {
  checkFieldByIdProduct,
  checkfieldProducts,
} from "../middlewares/validate-field.js";
const router = Router();

router.get("/",  getProducts);
router.get("/:id", checkFieldByIdProduct, getProductById);
router.post("/", checkfieldProducts, createdProduct);
router.put("/:id", checkFieldByIdProduct, updateProduct);
router.delete("/:id", checkFieldByIdProduct, deleteProduct);
export default router;
