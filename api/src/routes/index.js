// /gestion-finanzas/api/src/routes/index.js

const express = require('express');
const router = express.Router();
const GastosController = require('../controllers/gastosController');

// Create a new instance of the GastosController
const gastosController = new GastosController();

// Define routes for managing expenses
router.get('/gastos', gastosController.getAllGastos);
router.get('/gastos/:id', gastosController.getGastoById);
router.post('/gastos', gastosController.createGasto);
router.put('/gastos/:id', gastosController.updateGasto);
router.delete('/gastos/:id', gastosController.deleteGasto);

module.exports = router;