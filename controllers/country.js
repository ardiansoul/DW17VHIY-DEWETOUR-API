const { country } = require("../models");

exports.readAllCountry = async (req, res) => {
  try {
    const countries = await country.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!countries)
      return res.status(400).send({
        message: "country is not exist",
      });

    res.status(200).send({
      message: "countries successfully loaded",
      data: {
        countries,
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
exports.readCountry = async (req, res) => {
  const id = req.params.id;

  try {
    const readcountry = await country.findOne({
      where: {
        id: id,
      },
    });

    if (!readcountry)
      return res.status(400).send({
        message: "trip is not exist",
      });

    res.status(200).send({
      message: "country successfully loaded",
      data: {
        id: readcountry.id,
        name: readcountry.name,
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
exports.createCountry = async (req, res) => {
  try {
    const countryExist = await country.findOne({
      where: { name: req.body.name },
    });
    if (countryExist)
      return res.status(400).send({
        message: "country already exists",
      });

    const createcountry = await country.create({
      name: req.body.name,
    });

    res.status(201).send({
      message: "country successfully created",
      data: {
        id: createcountry.id,
        name: createcountry.name,
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
exports.updateCountry = async (req, res) => {
  const id = req.params.id;
  try {
    const updatecountry = await country
      .update(
        {
          name: req.body.name,
        },
        {
          where: {
            id: id,
          },
        }
      )
      .then(() => {
        return country.findOne({
          where: {
            id: id,
          },
        });
      });

    res.status(200).send({
      message: "country successfully updated",
      data: {
        // updatecountry,
        id: updatecountry.id,
        name: updatecountry.name,
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
exports.deleteCountry = async (req, res) => {
  const id = req.params.id;

  try {
    const deletecountry = await country
      .findOne({
        where: {
          id: id,
        },
      })
      .then((result) => {
        return country
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
      message: "country successfully updated",
      data: {
        id: deletecountry.id,
        name: deletecountry.name,
      },
    });
  } catch (err) {
    res.status(400).send({ error: err }, err);
  }
};
