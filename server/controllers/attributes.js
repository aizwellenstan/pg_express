const Attribute = require("../models").Attribute;

module.exports = {
  create(req, res) {
    return Attribute.create({
      content: req.body.content,
      historicalId: req.params.historicalId
    })
      .then(attribute => res.status(201).send(attribute))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Attribute.find({
      where: {
        id: req.params.attributeId,
        historicalId: req.params.historicalId
      }
    })
      .then(attribute => {
        if (!attribute) {
          return res.status(404).send({
            message: "Attribute Not Found"
          });
        }

        return attribute
          .update({
            content: req.body.content || attribute.content,
            complete: req.body.complete || attribute.complete
          })
          .then(updatedAttribute => res.status(200).send(updatedAttribute))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return Attribute.find({
      where: {
        id: req.params.attributeId,
        historicalId: req.params.historicalId
      }
    })
      .then(attribute => {
        if (!attribute) {
          return res.status(404).send({
            message: "Attribute Not Found"
          });
        }

        return attribute
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
