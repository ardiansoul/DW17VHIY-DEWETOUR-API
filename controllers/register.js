const { user } = require("../models");
const { registerValidator } = require("../middleware/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { error } = await registerValidator(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    // const { fullName, email, password, phone, address } = req.body;

    const EmailExist = await user.findOne({ where: { email: req.body.email } });
    if (EmailExist)
      return res.status(400).send({ message: "email already exist" });

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const User = await user.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role,
      phone: req.body.phone,
      address: req.body.address,
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
          id: User.id,
          email: User.email,
          token: token,
          role: User.role,
        },
      });
    } catch (err) {
      res.status(400).send({ error: "account created failed" });
    }
  } catch (err) {
    res.status(500).send({ error: err }, err);
  }
};
