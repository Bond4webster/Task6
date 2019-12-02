const Joi = require('@hapi/joi');

const userValidation = Joi.object({
    name: Joi.string()
        .alphanum()
        .pattern(/^[A-Z][a-z]+$/)
        .max(30)
        .required(),

    surname: Joi.string()
        .alphanum()
        .pattern(/^[A-Z][a-z]+$/)
        .max(30)
        .required(),
    cityID: Joi.string()
        .required(),
    login: Joi.string()
        .alphanum()
        .min(5)
        .max(20)
        .required(),
    password: Joi.string()
        .min(4)
        .required()
});
 module.exports = userValidation;