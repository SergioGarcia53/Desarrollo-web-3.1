// ubicacionController.js
const Ubicacion = require('../modelos/ubicacionModel');

let ubicaciones = [];

// Obtener todas las ubicaciones
function obtenerUbicaciones(req, res) {
  res.json(ubicaciones);
}

// Obtener una ubicación por su ID
function obtenerUbicacionPorId(req, res) {
  const ubicacion = ubicaciones.find(u => u.id === parseInt(req.params.id));
  if (!ubicacion) return res.status(404).send('Ubicación no encontrada.');
  res.json(ubicacion);
}

// Crear una nueva ubicación
function crearUbicacion(req, res) {
  const nuevaUbicacion = new Ubicacion(
    req.body.id,
    req.body.descripcion,
    req.body.activos,
    req.body.imagen
  );
  ubicaciones.push(nuevaUbicacion);
  res.status(201).json(nuevaUbicacion);
}

// Actualizar una ubicación existente
function actualizarUbicacion(req, res) {
  let ubicacion = ubicaciones.find(u => u.id === parseInt(req.params.id));
  if (!ubicacion) return res.status(404).send('Ubicación no encontrada.');

  ubicacion.descripcion = req.body.descripcion;
  ubicacion.activos = req.body.activos;
  ubicacion.imagen = req.body.imagen;

  res.json(ubicacion);
}

// Eliminar una ubicación existente
function eliminarUbicacion(req, res) {
  const index = ubicaciones.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Ubicación no encontrada.');

  ubicaciones.splice(index, 1);
  res.send('Ubicación eliminada.');
}

module.exports = {
  obtenerUbicaciones,
  obtenerUbicacionPorId,
  crearUbicacion,
  actualizarUbicacion,
  eliminarUbicacion
};

