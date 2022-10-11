import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateJWT } from "../helpers/generar-jwt.js";

class Auth {
  constructor() {}

  async login(email, password) {
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return "Usuario / password no son correctos";
    }
    const validPassword = bcryptjs.compareSync(password, user.password);

    if (!validPassword) {
      return "Usuario / password no son correctos";
    }

    // generar el jwt
    const token = await generateJWT(user.id);
    const data = {
      token,
      user,
    };
    return data;
  }
}

export default Auth;
