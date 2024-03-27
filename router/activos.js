const express = require('express');
const router = express.Router();
const activosController = require('../controladores/activoController')

// Definir las rutas para el recurso Personas
router.get('/', (req, res) => {
  res.send(activosController.obtenerActivos(req, res));
});

router.get('/:id', (req, res) => {
  res.send(activosController.obtenerActivoPorId(req, res));
});

router.post('/', (req, res) => {
  res.send(activosController.crearActivo(req, res));
});

router.put('/:id', (req, res) => {
  res.send(activosController.actualizarActivo(req, res));
});

router.delete('/:id', (req, res) => {
  res.send(activosController.eliminarActivo(req, res));
});

module.exports = router;