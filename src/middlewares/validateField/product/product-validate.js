import { validationResult, check } from "express-validator";
import { existIdProduct, existProduct, existIdCategory } from "../../../helpers/db-validator.js";
import {  validateFieldPostman } from "../category/category-validate.js";

const validateFieldProduct = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        res.status(403);
        // res.redirect('/templates/error')
        res.render('errors/error-product', { errors: error.array() })
        // res.send({ errors: error.array()});
    }
};

export const checkfieldProducts = [
    check("name", 'el nombre es obligatorio').not().isEmpty(),
    check("price", 'el precio es obligatorio').isNumeric().not().isEmpty(),
    check("stock", 'el stock es obligatorio').isNumeric().not().isEmpty(),
    check('name').custom(existProduct),
    check('category').custom(existIdCategory),
    check('category', ' no es un id de mongo, revise el id de la categoria').isMongoId(),
    (req, res, next) => {
        validateFieldProduct(req, res, next);
    },
];


export const checkFieldByIdProduct = [
    check('id','el id no es de mongo').isMongoId(),
    check('id',).custom(existIdProduct),
    (req, res, next) => {
        validateFieldPostman(req, res, next);
    },
];
