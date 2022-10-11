import { Router } from "express";
import { protectRoute } from "../middlewares/valid-jwt.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/profile", protectRoute, (req, res) => {
  res.render("profile");
});



export default router;
