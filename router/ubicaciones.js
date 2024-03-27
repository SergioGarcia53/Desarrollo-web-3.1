// ubicaciones.js
const express = require('express');
const router = express.Router();
const ubicacionesController = require('../controladores/ubicacionController')

// Definir las rutas para el recurso Personas
router.get('/', (req, res) => {
  res.send(ubicacionesController.obtenerActivos(req, res));
});

router.get('/:id', (req, res) => {
  res.send(ubicacionesController.obtenerActivoPorId(req, res));
});

router.post('/', (req, res) => {
  res.send(ubicacionesController.crearActivo(req, res));
});

router.put('/:id', (req, res) => {
  res.send(ubicacionesController.actualizarActivo(req, res));
});

router.delete('/:id', (req, res) => {
  res.send(ubicacionesController.eliminarActivo(req, res));
});

module.exports = router;