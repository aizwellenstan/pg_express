const Historical = require("../models").Historical;
const Attribute = require("../models").Attribute;

module.exports = {
  create(req, res) {
    return Historical.create({
      title: req.body.title
    })
      .then(historical => res.status(201).send(historical))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Historical.findAll({
      include: [
        {
          model: Attribute,
          as: "attributes"
        }
      ]
    })
      .then(historicals => res.status(200).send(historicals))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Historical.findById(req.params.historicalId, {
      include: [
        {
          model: Attribute,
          as: "attributes"
        }
      ]
    })
      .then(historical => {
        if (!historical) {
          return res.status(404).send({
            message: "Historical Not Found"
          });
        }
        return res.status(200).send(historical);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Historical.findById(req.params.historicalId, {
      include: [
        {
          model: Attribute,
          as: "attributes"
        }
      ]
    })
      .then(historical => {
        if (!historical) {
          return res.status(404).send({
            message: "Historical Not Found"
          });
        }
        return historical
          .update({
            title: req.body.title || historical.title
          })
          .then(() => res.status(200).send(historical))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Historical.findById(req.params.historicalId)
      .then(historical => {
        if (!historical) {
          return res.status(400).send({
            message: "Historical Not Found"
          });
        }
        return historical
          .destroy()
          .then(() =>
            res.status(200).send({ message: "Historical deleted successfully." })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
