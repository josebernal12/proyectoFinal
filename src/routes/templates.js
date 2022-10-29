import { Router } from "express";
import { protectRoute } from "../middlewares/valid-jwt.js";
import Cart from "../models/cart.model.js";
import Product from '../models/product.model.js'
const router = Router();

router.get("/login", (req, res) => {
  res.render("auth/login");
});
router.get("/register", (req, res) => {
  res.render("auth/register");
});
router.get("/profile", protectRoute, (req, res) => {
  const user = req.usuario;
  res.render("auth/profile", { user: user });
});
router.get("/products", protectRoute, (req, res) => {
  const user = req.usuario
  res.render("product/product", { user: user });
});
router.get("/products/:id", protectRoute, async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  res.render('product/productId', { product: product })
});
router.get("/product/create", protectRoute, (req, res) => {
  res.render("product/create");
});
// router.get("/product/prueba",(req, res) => {
//   res.send('holaa');
// });
router.get("/products/edit/:id", protectRoute, async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  res.render("product/edit", { product: product });
});
router.get('/chat', protectRoute, (req, res) => {
  const user = req.usuario
  res.render('chat/chat', { user: user })
})
router.get('/products/delete/:id', protectRoute, async (req, res) => {

  const { id } = req.params

  const deleteProduct = await Product.findByIdAndDelete(id)

  res.redirect('/templates/products')

})

// //CHAT

router.get('/chat/response', (req, res) => {
  res.render('chat/response')
})
//
router.get('/cart', protectRoute, async (req, res) => {
  // const { id } = req.params
  // console.log(id)
  // const cart = await Cart.findById(id)
  // console.log(cart)

  res.render('cart/cart',)
})


// router.get('/errorLogin', protectRoute, (req, res) => {
//   res.render('errors/error.login')
// })



export default router;
