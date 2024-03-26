// responsableController.js
const Responsable = require('../modelos/responsableModel');

let responsables = [];

// Obtener todos los responsables
function obtenerResponsables(req, res) {
  res.json(responsables);
}

// Obtener un responsable por su ID
function obtenerResponsablePorId(req, res) {
  const responsable = responsables.find(r => r.id === parseInt(req.params.id));
  if (!responsable) return res.status(404).send('Responsable no encontrado.');
  res.json(responsable);
}

// Crear un nuevo responsable
function crearResponsable(req, res) {
  const nuevoResponsable = new Responsable(
    req.body.id,
    req.body.numeroEmpleado,
    req.body.nombre,
    req.body.activosEnCustodia,
    req.body.imagen
  );
  responsables.push(nuevoResponsable);
  res.status(201).json(nuevoResponsable);
}

// Actualizar un responsable existente
function actualizarResponsable(req, res) {
  let responsable = responsables.find(r => r.id === parseInt(req.params.id));
  if (!responsable) return res.status(404).send('Responsable no encontrado.');

  responsable.numeroEmpleado = req.body.numeroEmpleado;
  responsable.nombre = req.body.nombre;
  responsable.activosEnCustodia = req.body.activosEnCustodia;
  responsable.imagen = req.body.imagen;

  res.json(responsable);
}

// Eliminar un responsable existente
function eliminarResponsable(req, res) {
  const index = responsables.findIndex(r => r.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Responsable no encontrado.');

  responsables.splice(index, 1);
  res.send('Responsable eliminado.');
}

module.exports = {
  obtenerResponsables,
  obtenerResponsablePorId,
  crearResponsable,
  actualizarResponsable,
  eliminarResponsable
};



