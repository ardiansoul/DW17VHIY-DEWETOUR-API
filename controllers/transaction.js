const { country, trip, transaction } = require("../models");

exports.readAllTransaction = async (req, res) => {
  try {
    const data = await transaction.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: trip,
          as: "trips",
          include: [
            {
              model: country,
              as: country,
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
          attributes: {
            exclude: ["createdAt", "updatedAt"],
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
  } catch (err) {}
};

exports.readTransaction = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await transaction.findOne({
      where: {
        id: id,
      },
      include: {
        model: trip,
        as: "trips",
        include: {
          model: country,
          as: "country",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!data)
      return res.status(400).send({
        message: "transaction is not exist",
      });

    res.status(200).send({
      message: "transaction successfully loaded",
      data: {
        id: data.id,
        counterQty: data.counterQty,
        total: data.total,
        status: data.status,
        attachment: data.attachment,
        trip: {
          id: data.trips.id,
          title: data.trips.title,
          country: data.trips.country,
          accommodation: data.trips.accommodation,
          transportation: data.trips.transportation,
          eat: data.trips.eat,
          day: data.trips.day,
          night: data.trips.night,
          dateTrip: data.trips.dateTrip,
          price: data.trips.price,
          quota: data.trips.quota,
          description: data.trips.description,
          image: data.trips.image,
        },
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
exports.createTransaction = async (req, res) => {
  try {
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
          include: {
            model: trip,
            as: "trips",
            include: {
              model: country,
              as: "country",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
      });

    res.status(201).send({
      message: "transaction successfully created",
      data: {
        id: data.id,
        counterQty: data.counterQty,
        total: data.total,
        status: data.status,
        attachment: data.attachment,
        trip: {
          id: data.trips.id,
          title: data.trips.title,
          country: data.trips.country,
          accommodation: data.trips.accommodation,
          transportation: data.trips.transportation,
          eat: data.trips.eat,
          day: data.trips.day,
          night: data.trips.night,
          dateTrip: data.trips.dateTrip,
          price: data.trips.price,
          quota: data.trips.quota,
          description: data.trips.description,
          image: data.trips.image,
        },
      },
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
            exclude: ["createdAt", "updatedAt"],
          },
          include: {
            model: trip,
            as: "trips",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
            include: {
              model: country,
              as: "country",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          },
        });
      });

    res.status(200).send({
      message: "transaction successfully updated",
      data: {
        id: data.id,
        counterQty: data.counterQty,
        total: data.total,
        status: data.status,
        attachment: data.attachment,
        trip: {
          id: data.trips.id,
          title: data.trips.title,
          country: data.trips.country,
          accommodation: data.trips.accommodation,
          transportation: data.trips.transportation,
          eat: data.trips.eat,
          day: data.trips.day,
          night: data.trips.night,
          dateTrip: data.trips.dateTrip,
          price: data.trips.price,
          quota: data.trips.quota,
          description: data.trips.description,
          image: data.trips.image,
        },
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
exports.deleteTransaction = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await transaction
      .findOne({
        where: {
          id: id,
        },
        include: {
          model: trip,
          as: "trips",
          include: {
            model: country,
            as: country,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      })
      .then((result) => {
        return transaction
          .destroy({
            where: {
              id: id,
            },
          })
          .then((u) => {
            return result;
          });
      });

    res.status(200).send({
      message: "transaction successfully deleted",
      data,
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
