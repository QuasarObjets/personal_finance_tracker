// /gestion-gastos-personales/api/src/controllers/gastosController.js

const Gasto = require('../models/gastoModel');

// Controlador para crear un nuevo gasto
exports.createGasto = async (req, res) => {
  try {
    const { concepto, cantidad } = req.body;

    // Crear un nuevo gasto
    const nuevoGasto = new Gasto({
      concepto,
      cantidad
    });

    // Guardar el gasto en la base de datos
    await nuevoGasto.save();

    res.status(201).json({ mensaje: 'Gasto creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el gasto' });
  }
};

// Controlador para obtener todos los gastos
exports.getGastos = async (req, res) => {
  try {
    // Obtener todos los gastos de la base de datos
    const gastos = await Gasto.find();

    res.status(200).json(gastos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los gastos' });
  }
};

// Controlador para actualizar un gasto
exports.updateGasto = async (req, res) => {
  try {
    const { id } = req.params;
    const { concepto, cantidad } = req.body;

    // Buscar el gasto por su ID
    const gasto = await Gasto.findById(id);

    if (!gasto) {
      return res.status(404).json({ error: 'Gasto no encontrado' });
    }

    // Actualizar los datos del gasto
    gasto.concepto = concepto;
    gasto.cantidad = cantidad;

    // Guardar los cambios en la base de datos
    await gasto.save();

    res.status(200).json({ mensaje: 'Gasto actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el gasto' });
  }
};

// Controlador para eliminar un gasto
exports.deleteGasto = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar el gasto por su ID y eliminarlo de la base de datos
    await Gasto.findByIdAndDelete(id);

    res.status(200).json({ mensaje: 'Gasto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el gasto' });
  }
};
