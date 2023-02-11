const express = require('express');
const route = express.Router(); // Para dividir as rotas/manipular.
const homecontroller = require('./src/controllers/homeController');

// Rotas da home.
route.get('/', homecontroller.homePage); // Página inícial.

module.exports = route; // exportando todas as rotas.
