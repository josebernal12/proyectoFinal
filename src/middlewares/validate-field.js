import { validationResult, check } from "express-validator";
import { existId, existIdProduct } from "../helpers/db-validator.js";

const validateField = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send({ errors: error.array() });
  }
};

export const checkField = [
  check("name").exists().not().isEmpty(),
  check("password").exists().not().isEmpty(),
  check("age").exists().isNumeric().not().isEmpty(),
  check("phone").exists().isNumeric().not().isEmpty(),
  check("email").exists().not().isEmpty(),
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
  check("name").exists().not().isEmpty(),
  check("price").exists().isNumeric().not().isEmpty(),
  check("stock").exists().isNumeric().not().isEmpty(),
  (req, res, next) => {
    validateField(req, res, next);
  },
];

export const checkFieldByIdProduct = [
  check('id').isMongoId(),
  check('id',).custom(existIdProduct),
  (req, res, next) => {
    validateField(req, res, next);
  },
];

