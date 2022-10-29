// añadire otro validar jwt para que se pueda utilizar con postman y a si probarlo con categoria y carrito
import jwt from "jsonwebtoken";
import userModel from '../models/user.model.js'
export const validJWTPostman = async (res, req, next) => {

    if (!token) {
        return res.json({
            msg: 'token no valido'
        })
    }
    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        const user = await userModel.findById(uid)
        if (!user) {
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe en BD'
            })
        }

        req.usuario = user
        next()
    } catch (error) {
        res.status(401).json({
            msg: 'token no valido'
        })
    }
}

