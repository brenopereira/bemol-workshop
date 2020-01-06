const express = require("express");
const routes = express.Router();

const ClientController = require("./controllers/ClientController");

routes.get("/clients", ClientController.index);
routes.get("/clients/create", ClientController.create);
routes.delete("/clients/:id", ClientController.delete);
routes.get("/clients/:id", ClientController.show);

module.exports = routes;
