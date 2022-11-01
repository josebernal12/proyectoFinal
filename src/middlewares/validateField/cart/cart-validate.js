import { check } from "express-validator";
import { existEmailCart, existIdCart } from "../../../helpers/db-validator/cart-validator/cart-validator.js";
import { validateFieldPostman } from "../category/category-validate.js";

export const validateFieldCart = [
    check('email', 'el email es obligatorio').exists().not().isEmpty(),
    check('email').custom(existEmailCart),
    check('order', 'agregue un producto por favor!').exists().not().isEmpty(),
    (req, res, next) => {
        validateFieldPostman(req, res, next);
    },
]

export const checkFieldByIdCart = [
    check('id', 'el id no es de mongo').isMongoId(),
    check('id').custom(existIdCart),
    (req, res, next) => {
        validateFieldPostman(req, res, next);
    },
];
