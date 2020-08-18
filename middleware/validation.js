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

const countryValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
  });
  return schema.validate(data);
};

const tripValidator = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(5).required(),
    countryId: Joi.number().required(),
    accommodation: Joi.string().required(),
    transportation: Joi.string().required(),
    eat: Joi.string().required(),
    day: Joi.number().required(),
    night: Joi.number().required(),
    quota: Joi.number().required(),
    dateTrip: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().min(8).required(),
    image: Joi.string().required(),
  });
  return schema.validate(data);
};

const transactionValidator = (data) => {
  const schema = Joi.object({
    counterQty: Joi.number().required(),
    total: Joi.number().required(),
    status: Joi.string().required(),
    attachment: Joi.string().required(),
    tripId: Joi.number().required(),
    userId: Joi.number().required(),
  });
  return schema.validate(data);
};

module.exports.registerValidator = registerValidator;
module.exports.loginValidator = loginValidator;
module.exports.countryValidator = countryValidator;
module.exports.tripValidator = tripValidator;
module.exports.transactionValidator = transactionValidator;
