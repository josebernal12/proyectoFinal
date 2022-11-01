import { validationResult, check } from "express-validator";
import { existId, existPhone, existUser } from "../../../helpers/db-validator/user-validator/user.js";

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

export const checkField = [
    check("name", 'el nombre es obligatorio').exists().not().isEmpty(),
    check("password", 'el password es obligatorio').exists().not().isEmpty(),
    check("age", 'la edad es obligatoria').exists().isNumeric().not().isEmpty(),
    check("phone", 'el telefono es obligatorio o te faltaron mas digitos(10)!').exists().isNumeric().isLength({ min: 10, max: 10 }).not().isEmpty(),
    check('phone').custom(existPhone),
    check("email", 'el email es obligatorio').exists().not().isEmpty(),
    check('email').custom(existUser),

    (req, res, next) => {
        validateField(req, res, next);
    },

];

export const checkFieldById = [
    check('id', 'el id no es de mongo!').isMongoId(),
    check('id').custom(existId),
    (req, res, next) => {
        validateField(req, res, next);
    },
];