const { user, trip, country, transaction } = require("../models");

exports.readAllUser = async (req, res) => {
  try {
    const data = await user.findAll({
      attributes: {
        exclude: ["password", "createdAt", "updateAt"],
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

exports.readUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await user.findOne({
      where: { id: id },
      attributes: {
        exclude: ["password", "createdAt", "updateAt"],
      },
    });
    res.status(200).send({
      message: "user seccessfully loaded",
      data,
    });
  } catch (err) {
    res.status(500).send(
      {
        error: err,
      },
      err
    );
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

exports.readAllPayment = async (req, res) => {
  const userId = req.params.userId;

  try {
    const data = await transaction.findAll({
      where: {
        userId: userId,
      },
      order: [["createdAt", "DESC"]],
      attributes: {
        exclude: ["updatedAt"],
      },
      include: [
        {
          model: trip,
          as: "trips",
          include: [
            {
              model: country,
              as: "country",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
          attributes: {
            exclude: ["countryId", "createdAt", "updatedAt"],
          },
        },
        {
          model: user,
          as: "users",
          attributes: {
            exclude: ["password", "createdAt", "updatedAt"],
          },
        },
      ],
    });

    if (!data)
      return res.status(400).send({
        message: "transaction is not exist",
      });

    res.status(200).send({
      message: "transaction successfully loaded",
      data,
    });
  } catch (err) {
    res.status(500).send({ error: err }, err);
  }
};

exports.readPaymentById = async (req, res) => {
  const userId = req.params.userId;
  const id = req.params.id;

  try {
    const data = await transaction.findOne({
      where: {
        userId: userId,
        id: id,
      },
      attributes: {
        exclude: ["tripId", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: trip,
          as: "trips",
          include: [
            {
              model: country,
              as: "country",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
          attributes: {
            exclude: ["countryId", "createdAt", "updatedAt"],
          },
        },
        {
          model: user,
          as: "users",
          attributes: {
            exclude: ["password", "createdAt", "updatedAt"],
          },
        },
      ],
    });

    if (!data)
      return res.status(400).send({
        message: "transaction is not exist",
      });

    res.status(200).send({
      message: "transaction successfully loaded",
      data,
    });
  } catch (err) {
    res.status(500).send({ error: err }, err);
  }
};

exports.updateUser = async (req, res) => {
  // console.log(req);
  console.log(req.file);
  if (req.file) req.body.image = req.file.path;
  // console.log(req.file.filename);
  const id = req.params.id;
  try {
    const data = await user
      .update(req.body, {
        where: {
          id: id,
        },
      })
      .then(() => {
        return user.findOne({
          where: {
            id: id,
          },
        });
      });

    res.status(200).send({
      message: "User successfully updated",
      data,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
