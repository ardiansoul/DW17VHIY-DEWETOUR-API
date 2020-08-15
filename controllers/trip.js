const { country, trip } = require("../models");

exports.readAllTrip = async (req, res) => {
  try {
    const trips = await trip.findAll({
      include: {
        model: country,
        as: "country",
        attributes: {
          exclude: ["createdAt", "updateAt"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!trip)
      return res.status(400).send({
        message: "trip is not exist",
      });

    res.status(200).send({
      message: "trips successfully loaded",
      data: {
        trips,
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
exports.readTrip = async (req, res) => {
  const id = req.params.id;

  try {
    const readtrip = await trip.findOne({
      where: {
        id: id,
      },
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
    });

    if (!readtrip)
      return res.status(400).send({
        message: "trip is not exist",
      });

    res.status(200).send({
      message: "trip successfully loaded",
      data: {
        trip,
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
exports.createTrip = async (req, res) => {
  try {
    const tripExist = await trip.findOne({
      where: { title: req.body.title },
    });
    if (tripExist)
      return res.status(400).send({
        message: "trip already exists",
      });

    const {
      title,
      countryId,
      accommodation,
      transportation,
      eat,
      day,
      night,
      dateTrip,
      price,
      quota,
      description,
      image,
    } = req.body;
    const createtrip = await trip.create({
      title,
      countryId,
      accommodation,
      transportation,
      eat,
      day,
      night,
      dateTrip,
      price,
      quota,
      description,
      image,
    });

    const readTrip = await trip.findOne({
      where: {
        id: createtrip.id,
      },
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
    });

    res.status(201).send({
      message: "trip successfully created",
      data: {
        id: readTrip.id,
        title: readTrip.title,
        country: readTrip.country,
        accommodation: readTrip.accommodation,
        transportation: readTrip.transportation,
        eat: readTrip.eat,
        day: readTrip.day,
        night: readTrip.night,
        dateTrip: readTrip.dateTrip,
        price: readTrip.price,
        quota: readTrip.quota,
        description: readTrip.description,
        image: readTrip.image,
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
exports.updateTrip = async (req, res) => {
  const id = req.params.id;
  try {
    const {
      title,
      countryId,
      accommodation,
      transportation,
      eat,
      day,
      night,
      dateTrip,
      price,
      quota,
      description,
      image,
    } = req.body;

    const updatetrip = await trip
      .update(
        {
          title,
          countryId,
          accommodation,
          transportation,
          eat,
          day,
          night,
          dateTrip,
          price,
          quota,
          description,
          image,
        },
        {
          where: {
            id: id,
          },
        }
      )
      .then(() => {
        return trip.findOne({
          where: {
            id: id,
          },
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
        });
      });

    res.status(200).send({
      message: "trip successfully updated",
      data: {
        id: updatetrip.id,
        title: updatetrip.title,
        country: updatetrip.country,
        accommodation: updatetrip.accommodation,
        transportation: updatetrip.transportation,
        eat: updatetrip.eat,
        day: updatetrip.day,
        night: updatetrip.night,
        dateTrip: updatetrip.dateTrip,
        price: updatetrip.price,
        quota: updatetrip.quota,
        description: updatetrip.description,
        image: updatetrip.image,
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
exports.deleteTrip = async (req, res) => {
  const id = req.params.id;

  try {
    const deletetrip = await trip
      .findOne({
        where: {
          id: id,
        },
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
      })
      .then((result) => {
        return trip
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
      message: "trip successfully deleted",
      data: {
        id: deletetrip.id,
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
