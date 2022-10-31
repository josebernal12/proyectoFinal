import { Router } from "express";
const router = Router();
import multer from "multer";
import shortid from 'shortid'
import path, { dirname } from "path"
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../uploads'),

  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { checkField, checkFieldById } from "../middlewares/validateField/user/user-validate.js";
import { validJWTPostman } from "../middlewares/valid-jwt-postman.js";
import { esAdminRole } from "../middlewares/role.js";

const upload = multer({
  storage,
  dest: path.join(__dirname, '../uploads')
}).single('image')


router.get("/", getUser);
router.get("/:id", checkFieldById, getUserById);
router.post("/", upload, checkField, createUser);
router.put("/:id", validJWTPostman, esAdminRole, checkFieldById, updateUser);
router.delete("/:id", validJWTPostman, esAdminRole, checkFieldById, deleteUser);
export default router;
