const { user, country, trip, transaction } = require("../models");
const { transactionValidator } = require("../middleware/validation");

exports.readAllTransaction = async (req, res) => {
  try {
    const data = await transaction.findAll({
      attributes: {
        exclude: ["tripId", "userId", "createdAt", "updatedAt"],
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
    if (data == 0)
      return res.status(400).send({
        message: "transaction is not exist",
      });

    res.status(200).send({
      message: "Transaction successfully loaded",
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

exports.readTransaction = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await transaction.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: ["tripId", "userId", "createdAt", "updatedAt"],
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
exports.createTransaction = async (req, res) => {
  try {
    const { error } = transactionValidator(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    const { counterQty, total, status, attachment, tripId, userId } = req.body;

    const data = await transaction
      .create({
        counterQty,
        total,
        status,
        attachment,
        tripId,
        userId,
      })
      .then((result) => {
        return transaction.findOne({
          where: {
            id: result.id,
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
          attributes: {
            exclude: ["tripId", "userId", "createdAt", "updatedAt"],
          },
        });
      });

    res.status(201).send({
      message: "transaction successfully created",
      data,
    });
  } catch (err) {
    res.status(500).send({ error: err }, err);
  }
};
exports.updateTransaction = async (req, res) => {
  const id = req.params.id;
  try {
    const { counterQty, total, status, attachment, tripId } = req.body;

    const data = await transaction
      .update(
        {
          counterQty,
          total,
          status,
          attachment,
          tripId,
        },
        {
          where: {
            id: id,
          },
        }
      )
      .then(() => {
        return transaction.findOne({
          where: {
            id: id,
          },
          attributes: {
            exclude: ["tripId", "userId", "createdAt", "updatedAt"],
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
      });

    res.status(200).send({
      message: "transaction successfully updated",
      data,
    });
  } catch (err) {
    res.status(500).send({ error: err }, err);
  }
};
