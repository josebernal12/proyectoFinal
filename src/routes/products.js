import { Router } from "express";
import {
  createdProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import { esAdminRole } from "../middlewares/role.js";
import { validJWTPostman } from "../middlewares/valid-jwt-postman.js";
import { protectRoute } from "../middlewares/valid-jwt.js";
import {
  checkFieldByIdProduct,
  checkfieldProducts,
} from "../middlewares/validate-field.js";
const router = Router();

router.get("/", getProducts);
router.get("/:id", protectRoute, checkFieldByIdProduct, getProductById);
router.post("/", protectRoute, esAdminRole, checkfieldProducts, createdProduct);
//le agregue el jwt de postman por que es el unico que no me funciona en front!, y para que se pueda probar en postman
router.put("/:id", validJWTPostman, checkFieldByIdProduct, updateProduct);
router.delete("/:id", protectRoute, esAdminRole, checkFieldByIdProduct, deleteProduct);

export default router;
