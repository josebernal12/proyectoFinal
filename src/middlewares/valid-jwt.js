import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
const protectRoute = async (req, res, next) => {
  const { _token } = req.cookies;

  if (!_token) {
    return res.redirect("/templates/login");
  }

  try {
    const decoded = jwt.verify(_token, process.env.SECRETORPRIVATEKEY);
    const user = await userModel.findById(decoded.uid);
    if (user) {
      req.usuario = user;
      return next();
    } else {
      return res.redirect("/templates/login");
    }
  } catch (error) {
    return res.clearCookie("_token").redirect("/templates/login");
  }
};
export { protectRoute };
