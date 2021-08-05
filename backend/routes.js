const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/registros', UserController.index);
routes.post('/:slug/registrar', UserController.create);
routes.get('/:slug/validar', UserController.validate);
routes.put('/:slug/validar/update', UserController.update);

module.exports = routes;