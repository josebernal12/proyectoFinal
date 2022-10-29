import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { errorLogin } from "../middlewares/login.js";
const router = Router();

router.post("/login", errorLogin, login);


router.get("/logout", (req, res) => {
  res.cookie("_token", "", { maxAge: 1 });
  res.status(200).redirect("/templates/login");
});

export default router;
