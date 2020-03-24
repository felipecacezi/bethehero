const express             = require("express");
const ongController       = require("./controller/ongs");
const incidentsController = require("./controller/incidents");
const profileController   = require("./controller/profile");
const sessionController   = require("./controller/session");
const routes              = express.Router();

/**ONGS */
routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.list);

/**INCIDENTS */
routes.post('/incidents', incidentsController.create);
routes.get('/incidents', incidentsController.list);
routes.delete('/incidents/:id', incidentsController.delete);

/**PROFILE */
routes.get('/profile', profileController.index);

/**SESSION */
routes.post('/sessions', sessionController.create);

module.exports = routes;