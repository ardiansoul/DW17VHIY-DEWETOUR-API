const { user } = require("../models");
// const password = user.password;
// const user = require("../models/user");
const { loginValidator } = require("../middleware/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.login = async (req, res) => {
  try {
    const { error } = loginValidator(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    // const { email, password } = req.body;

    const validEmail = await user.findOne({ where: { email: req.body.email } });
    if (!validEmail)
      return res.status(400).send({
        message: "Username or Password is not invalid",
      });

    const validPass = await bcrypt.compare(
      req.body.password,
      validEmail.password
    );
    if (!validPass)
      return res.status(400).send({
        message: "Username or Password is not invalid",
      });
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
    res.header("x-access-token", token).send({
      message: "you are logged in",
      data: {
        id: validEmail.id,
        email: validEmail.email,
        accessToken: token,
        role: validEmail.role,
        image: validEmail.image,
      },
    });
  } catch (err) {
    res.status(500).send(
      {
        message: "account login failed",
        error: err,
      },
      err
    );
  }
};
