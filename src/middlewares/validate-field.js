import { validationResult, check } from "express-validator";
import { existCategory, existId, existIdCategory, existIdProduct, existProduct, existUser } from "../helpers/db-validator.js";

const validateField = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    // res.redirect('/templates/error')
    res.render('errors/error', { errors: error.array() })
    // res.send({ errors: error.array()});
  }
};
const validateFieldCategories = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send({ errors: error.array() });
  }
};
// cree otro mas para poder mostrar los errores en productos
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

export const checkField = [
  check("name", 'el nombre es obligatorio').exists().not().isEmpty(),
  check("password", 'el password es obligatorio').exists().not().isEmpty(),
  check("age", 'la edad es obligatoria').exists().isNumeric().not().isEmpty(),
  check("phone", 'el telefono es obligatorio').exists().isNumeric().not().isEmpty(),
  check("email", 'el email es obligatorio').exists().not().isEmpty(),
  check('email').custom(existUser),

  (req, res, next) => {
    validateField(req, res, next);
  },

];
export const checkFieldById = [
  check('id').isMongoId(),
  check('id',).custom(existId),
  (req, res, next) => {
    validateField(req, res, next);
  },
];
export const checkfieldProducts = [
  check("name", 'el nombre es obligatorio').not().isEmpty(),
  check("price", 'el precio es obligatorio').isNumeric().not().isEmpty(),
  check("stock", 'el stock es obligatorio').isNumeric().not().isEmpty(),
  check('name').custom(existProduct),
  (req, res, next) => {
    validateFieldProduct(req, res, next);
  },
];


export const checkFieldByIdProduct = [
  check('id').isMongoId(),
  check('id',).custom(existIdProduct),
  (req, res, next) => {
    validateFieldProduct(req, res, next);
  },
];

export const checkfieldCategory = [
  check("name", 'el nombre es obligatorio').exists().not().isEmpty(),
  check("product", 'el producto es obligatorio').exists().not().isEmpty(),
  check('name').custom(existCategory),
  (req, res, next) => {
    validateFieldCategories(req, res, next);
  },
];

export const checkFieldByIdCategory = [
  check('id').isMongoId(),
  check('id',).custom(existIdCategory),
  (req, res, next) => {
    validateFieldCategories(req, res, next);
  },
];