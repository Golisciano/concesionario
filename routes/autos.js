const express = require(`/express`);
const routes = express.Routes();

const controller = require(`../controller/auto`);


routes.get(`/`, controller.todosLosAutos);

module.exports = router;
