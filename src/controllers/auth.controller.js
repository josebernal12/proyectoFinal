import Auth from "../services/auth.services.js";
import logger from '../helpers/logger.js'

const authServices = new Auth();

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await authServices.login(email, password);

    logger.info(`el token del usuario registrado es ${response.token}`)

    res.cookie("_token", response.token, {
      httpOnly: true,
    })
      .redirect("/templates/profile");
  } catch (error) {
    console.log(error);
  }
};
