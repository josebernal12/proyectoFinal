import CartServices from '../services/cart.services.js'
import { sendMessage } from '../email/email.js'
const cart = new CartServices()

const createCart = async (req, res) => {
    try {
        const cartCreated = await cart.createdCart(req.body);
        res.json({
            cartCreated,
        });
    } catch (error) {
        handleHtpp(res, 'ERROR EN CREATE CART', error)
    }
};


const getCart = async (req, res) => {

    try {
        const response = await cart.getAllCart()
        res.json({
            response
        })

    } catch (error) {

        handleHtpp(res, 'ERROR EN GET ALL CART', error)
    }

}

const getCartById = async (req, res) => {

    try {
        const { id } = req.params

        const response = await cart.getById(id)
        res.json({
            response
        })

    } catch (error) {
        handleHtpp(res, 'ERROR EN GET CART BY ID', error)
    }

}


const uploadCart = async (req, res) => {

    try {
        const { id } = req.params

        const updatedCart = await cart.updatedCart(id, req.body)
        res.json({ updatedCart })


    } catch (error) {

        handleHtpp(res, 'ERROR EN UPLOAD CART', error)
    }

}

const deleteCart = async (req, res) => {

    try {
        const { id } = req.params

        const deletedCart = await cart.deletedCart(id)
        res.json({ deletedCart })


    } catch (error) {

        handleHtpp(res, 'ERROR EN DELETE CART', error)
    }

}


const buyCart = async (req, res) => {

    const { id } = req.params

    const response = await cart.deletedCart(id)
    const whatsapp = await sendMessage(req.usuario.phone, req.usuario.name)

    res.json({
        msg: 'carrito comprado',
        whatsapp

    })

}



export {
    createCart,
    getCart,
    getCartById,
    uploadCart,
    deleteCart,
    buyCart
}