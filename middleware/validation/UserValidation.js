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
        .required()
});
 module.exports = userValidation;