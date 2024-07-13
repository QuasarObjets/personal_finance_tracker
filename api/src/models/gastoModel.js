// File: gestion-gastos-personales/api/src/models/gastoModel.js

const mongoose = require('mongoose');

const gastoSchema = new mongoose.Schema({
  descripcion: {
    type: String,
    required: true
  },
  monto: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

const Gasto = mongoose.model('Gasto', gastoSchema);

module.exports = Gasto;