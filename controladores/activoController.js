// activoController.js
const Activo = require('../modelos/activoModel');

let activos = [];

function obtenerActivos(req, res) {
  res.json(activos);
}

function obtenerActivoPorId(req, res) {
  const activo = activos.find(a => a.id === parseInt(req.params.id));
  if (!activo) return res.status(404).send('Activo no encontrado.');
  res.json(activo);
}

function crearActivo(req, res) {
  const id = req.body.id; // Tomar el ID proporcionado por el cliente

  // Generar valores aleatorios para los demás atributos
  const numeroSerie = Math.random().toString(36).substring(7);
  const numeroInventario = Math.floor(Math.random() * 1000) + 1;
  const tipo = ['Computadora', 'Mueble', 'Equipo electrónico'][Math.floor(Math.random() * 3)];
  const descripcion = 'Descripción aleatoria';
  const ubicacionId = Math.floor(Math.random() * 10) + 1; // Suponiendo 10 ubicaciones
  const responsableId = Math.floor(Math.random() * 100) + 1; // Suponiendo 100 responsables
  const imagen = 'url_imagen';

  const nuevoActivo = new Activo(
    id,
    numeroSerie,
    numeroInventario,
    tipo,
    descripcion,
    ubicacionId,
    responsableId,
    imagen
  );
  activos.push(nuevoActivo);
  res.status(201).json(nuevoActivo);
}

function actualizarActivo(req, res) {
  let activo = activos.find(a => a.id === parseInt(req.params.id));
  if (!activo) return res.status(404).send('Activo no encontrado.');

  activo.numeroSerie = req.body.numeroSerie;
  activo.numeroInventario = req.body.numeroInventario;
  activo.tipo = req.body.tipo;
  activo.descripcion = req.body.descripcion;
  activo.ubicacionId = req.body.ubicacionId;
  activo.responsableId = req.body.responsableId;
  activo.imagen = req.body.imagen;

  res.json(activo);
}

function eliminarActivo(req, res) {
  const index = activos.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Activo no encontrado.');

  activos.splice(index, 1);
  res.send('Activo eliminado.');
}

module.exports = {
  obtenerActivos,
  obtenerActivoPorId,
  crearActivo,
  actualizarActivo,
  eliminarActivo
};

