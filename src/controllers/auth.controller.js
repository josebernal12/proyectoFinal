import Auth from "../services/auth.services.js";
const authServices = new Auth();

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await authServices.login(email, password);
   
    res.cookie("_token", response.token, {
      httpOnly: true,
    })
      .redirect("/templates/profile");
  } catch (error) {
    console.log(error);
  }
};
