import userModel from "../models/user.model.js"
import bcryptjs from "bcryptjs";


export const errorLogin = async (req, res, next) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email: email });
    if (!user) {
        return res.render('errors/errorLogin');
    }
    const validPassword = bcryptjs.compareSync(password, user.password);

    if (!validPassword) {
        return res.render('errors/errorLogin');
    }
    next()
}