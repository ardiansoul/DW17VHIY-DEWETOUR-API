const { user } = require("../models");

exports.readAllUser = async (req, res) => {
  try {
    const data = await user.findAll({
      attributes: {
        exclude: ["createdAt", "updateAt"],
      },
    });
    res.status(200).send({
      message: "users successfully loaded",
      data,
    });
  } catch (err) {
    res.status(500).send({ error: err }, err);
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await user.destroy({
      where: {
        id: id,
      },
    });

    if (!data) {
      res.status(400).send({
        message: "user not found",
      });
    }
    res.status(200).send({
      message: "user seccessfully deleted",
      data,
    });
  } catch (err) {
    res.status(500).send({ error: err }, err);
  }
};
