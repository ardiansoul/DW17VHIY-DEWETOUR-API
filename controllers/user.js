const { user } = require("../models");

exports.findAll = async (req, res) => {
  try {
    const users = await user.findAll();
    res.status(200).send({
      message: "users successfully loaded",
      users,
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};

exports.delete = (req, res) => {};
