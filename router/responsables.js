// responsables.js
const express = require('express');
const router = express.Router();
const responsablesController = require('../controladores/responsableController')

// Definir las rutas para el recurso Personas
router.get('/', (req, res) => {
  res.send(responsablesController.obtenerActivos(req, res));
});

router.get('/:id', (req, res) => {
  res.send(responsablesController.obtenerActivoPorId(req, res));
});

router.post('/', (req, res) => {
  res.send(responsablesController.crearActivo(req, res));
});

router.put('/:id', (req, res) => {
  res.send(responsablesController.actualizarActivo(req, res));
});

router.delete('/:id', (req, res) => {
  res.send(responsablesController.eliminarActivo(req, res));
});

module.exports = router;
