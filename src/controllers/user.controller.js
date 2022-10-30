import { handleHtpp } from "../helpers/error.handle.js";
import User from "../services/user.services.js";
import logger from '../helpers/logger.js'
import { sendEmail } from "../email/email.js";

const userServices = new User();
export const getUser = async (req, res) => {
  try {
    const response = await userServices.getUser();
    res.json(response);
  } catch (error) {
    handleHtpp(res, 'ERROR EN GET USER', error)
  }
};
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await userServices.getUserById(id);
    res.json(response);
  } catch (error) {
    handleHtpp(res, 'ERROR EN GET_USER_BY_ID', error)
  }
};
export const createUser = async (req, res) => {
  try {
    const image = req.file.filename

    const data = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone,
      age: req.body.age,
      image
    }
    if (data.password != req.body.repetir_password) {
      return res.render('errors/error-contraseña')
    }
    await sendEmail(data)
    const response = await userServices.createUser(data);
    logger.info(`el token del usuario creado es ${response.token}`)
    res.cookie("_token", response.token, {
      httpOnly: true,
    }).redirect("/templates/profile");


  } catch (error) {
    handleHtpp(res, 'ERROR EN CREATE USER', error)
  }
};
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await userServices.updateUser(id, req.body);
    res.json(response);
  } catch (error) {
    handleHtpp(res, 'ERROR EN UPDATE USER', error)
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await userServices.deleteUser(id);
    res.json(response);
  } catch (error) {
    handleHtpp(res, 'ERROR EN DELETE USER', error)
  }
};
