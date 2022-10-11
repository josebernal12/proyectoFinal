import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
const router = Router();

router.post("/login", login);
router.get("/logout", (req, res) => {
  res.cookie("_token", "", { maxAge: 1 });
  res.status(200).redirect("/templates/login");
});

export default router;
