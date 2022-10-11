import { Router } from "express";
const router = Router();

import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { checkField, checkFieldById } from "../middlewares/validate-field.js";

router.get("/", getUser);
router.get("/:id", checkFieldById, getUserById);
router.post("/", checkField, createUser);
router.put("/:id", checkFieldById, updateUser);
router.delete("/:id", checkFieldById, deleteUser);
export default router;
