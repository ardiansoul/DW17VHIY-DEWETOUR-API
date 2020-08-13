const { user } = require("../models");
const { registerValidator } = require("../middleware/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { error } = await registerValidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { fullName, email, password, phone, address } = req.body;

    const EmailExist = await user.findOne({ where: { email } });
    if (EmailExist) return res.status(400).send("email already exist");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const User = await user.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      address,
    });

    const token = jwt.sign(
      {
        id: User.id,
      },
      process.env.SECRET_KEY
    );

    try {
      res.status(201).send({
        message: "account created successfully",
        data: {
          email: User.email,
          token: token,
        },
      });
    } catch (err) {
      res.status(400).send(err);
    }
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
