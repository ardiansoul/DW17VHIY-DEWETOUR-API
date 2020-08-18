const { country, trip } = require("../models");
const { tripValidator } = require("../middleware/validation");

exports.readAllTrip = async (req, res) => {
  try {
    const data = await trip.findAll({
      include: {
        model: country,
        as: "country",
        attributes: {
          exclude: ["createdAt", "updateAt"],
        },
      },
      attributes: {
        exclude: ["countryId", "createdAt", "updatedAt"],
      },
    });

    if (!data)
      return res.status(400).send({
        message: "trip is not exist",
      });

    res.status(200).send({
      message: "trips successfully loaded",
      data,
    });
  } catch (err) {
    res.status(500).send({ error: err }, err);
  }
};
exports.readTrip = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await trip.findOne({
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
        exclude: ["countryId", "createdAt", "updatedAt"],
      },
    });

    if (!data)
      return res.status(400).send({
        message: "trip is not exist",
      });

    res.status(200).send({
      message: "trip successfully loaded",
      data,
    });
  } catch (err) {
    res.status(500).send({ error: err }, err);
  }
};
exports.createTrip = async (req, res) => {
  try {
    const { error } = tripValidator(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

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
    const data = await trip
      .create({
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
      })
      .then(() => {
        trip.findOne({
          where: {
            id: data.id,
          },
          include: {
            model: country,
            as: "country",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          attributes: {
            exclude: ["countryId", "createdAt", "updatedAt"],
          },
        });
      });

    res.status(201).send({
      message: "trip successfully created",
      data,
    });
  } catch (err) {
    res.status(500).send({ error: err }, err);
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

    const data = await trip
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
            exclude: ["countryId", "createdAt", "updatedAt"],
          },
        });
      });

    res.status(200).send({
      message: "trip successfully updated",
      data,
    });
  } catch (err) {
    res.status(500).send({ error: err }, err);
  }
};
exports.deleteTrip = async (req, res) => {
  const id = req.params.id;

  try {
    const trip = await trip.findOne({
      where: {
        id: id,
      },
    });
    if (!trip) {
      res.status(400).send({
        message: `trip not found`,
      });
    }

    await trip.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      message: "trip successfully deleted",
    });
  } catch (err) {
    res.status(500).send({ error: err }, err);
  }
};
