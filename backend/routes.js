const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/registros', UserController.index);
routes.post('/:slug/registrar', UserController.create);

module.exports = routes;