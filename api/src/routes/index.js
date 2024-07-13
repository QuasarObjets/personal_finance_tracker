// /gestion-gastos-personales/api/src/routes/index.js

const express = require('express');
const router = express.Router();
const gastosController = require('../controllers/gastosController');

// Ruta para obtener todos los gastos
router.get('/gastos', gastosController.obtenerGastos);

// Ruta para crear un nuevo gasto
router.post('/gastos', gastosController.crearGasto);

module.exports = router;