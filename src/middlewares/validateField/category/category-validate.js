import { validationResult, check } from "express-validator";
import { existCategory, existIdCategory } from "../../../helpers/db-validator/categories-validator/categories.js";


export const validateFieldPostman = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send({ errors: error.array() });
  }
};

export const checkfieldCategory = [
  check("name", 'el nombre es obligatorio').exists().not().isEmpty(),
  check("product", 'el producto es obligatorio').exists().not().isEmpty(),
  check('name').custom(existCategory),
  (req, res, next) => {
    validateFieldPostman(req, res, next);
  },
];


export const checkFieldByIdCategory = [
  check('id', 'el id no es de mongo').isMongoId(),
  check('id',).custom(existIdCategory),
  check('name').custom(existCategory),
  (req, res, next) => {
    validateFieldPostman(req, res, next);
  },
];