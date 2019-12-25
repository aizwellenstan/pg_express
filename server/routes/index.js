const historicalsController = require("../controllers").historicals;
//Não deixa explicito no tutorial a adição da linha abaixo
const attributesController = require("../controllers").attributes;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Historicals API!"
    })
  );

  app.post("/api/historicals", historicalsController.create);
  app.get("/api/historicals", historicalsController.list);
  app.get("/api/historicals/:historicalId", historicalsController.retrieve);
  app.put("/api/historicals/:historicalId", historicalsController.update);
  app.delete("/api/historicals/:historicalId", historicalsController.destroy);

  app.post("/api/historicals/:historicalId/attributes", attributesController.create);
  app.put("/api/historicals/:historicalId/attributes/:attributeId", attributesController.update);
  app.delete(
    "/api/historicals/:historicalId/attributes/:attributeId",
    attributesController.destroy
  );

  app.all("/api/historicals/:historicalId/attributes", (req, res) =>
    res.status(405).send({
      message: "Method Not Allowed"
    })
  );
};
