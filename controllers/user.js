const { user } = require("../models");

exports.readAllUser = async (req, res) => {
  try {
    const users = await user.findAll({
      attributes: {
        exclude: ["createdAt", "updateAt"],
      },
    });
    res.status(200).send({
      message: "users successfully loaded",
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await user.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      message: "user seccessfully deleted",
      data: {
        id: id,
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
