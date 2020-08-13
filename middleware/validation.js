const Joi = require("@hapi/joi");

const registerValidator = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().min(6).required(),
    email: Joi.string().min(10).required().email(),
    password: Joi.string().min(8).required(),
    phone: Joi.string().min(10).required(),
    address: Joi.string().min(10).required(),
  });
  return schema.validate(data);
};

const loginValidator = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(10).required(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidator = registerValidator;
module.exports.loginValidator = loginValidator;
