// activoController.js

// Importar el modelo de activo
const Activo = require('../modelos/activoModel');

// Lista de activos (simulación de base de datos)
let activos = [];

// Función para obtener todos los activos
function obtenerActivos(req, res) {
  res.json(activos);
}

// Función para obtener un activo por su ID
function obtenerActivoPorId(req, res) {
  const activo = activos.find(a => a.id === parseInt(req.params.id));
  if (!activo) return res.status(404).send('Activo no encontrado.');
  res.json(activo);
}

// Función para crear un nuevo activo
function crearActivo(req, res) {
  // Obtener el ID proporcionado por el cliente
  const id = req.body.id;

  // Generar valores aleatorios para los demás atributos
  const numeroSerie = Math.random().toString(36).substring(7);
  const numeroInventario = Math.floor(Math.random() * 1000) + 1;
  const tipo = ['Computadora', 'Mueble', 'Equipo electrónico'][Math.floor(Math.random() * 3)];
  const descripcion = 'Descripción aleatoria';
  const ubicacionId = Math.floor(Math.random() * 10) + 1; // Suponiendo 10 ubicaciones
  const responsableId = Math.floor(Math.random() * 100) + 1; // Suponiendo 100 responsables
  const imagen = 'url_imagen';

  // Crear un nuevo activo con los datos generados aleatoriamente
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

  // Agregar el nuevo activo a la lista de activos
  activos.push(nuevoActivo);

  // Enviar la respuesta al cliente
  res.status(201).json(nuevoActivo);
}

// Función para actualizar un activo existente
function actualizarActivo(req, res) {
  // Obtener el ID del activo a actualizar
  const id = parseInt(req.params.id);

  // Buscar el índice del activo en la lista de activos
  const index = activos.findIndex(a => a.id === id);

  // Verificar si el activo existe
  if (index === -1) {
    return res.status(404).send('Activo no encontrado.');
  }

  // Actualizar los datos del activo con los datos proporcionados en la solicitud
  activos[index] = {
    id: id,
    numeroSerie: req.body.numeroSerie,
    numeroInventario: req.body.numeroInventario,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion,
    ubicacionId: req.body.ubicacionId,
    responsableId: req.body.responsableId,
    imagen: req.body.imagen
  };

  // Enviar la respuesta al cliente
  res.json(activos[index]);
}

// Función para eliminar un activo existente
function eliminarActivo(req, res) {
    // Obtener el ID del activo a eliminar
    const id = parseInt(req.params.id);
  
    // Filtrar la lista de activos para eliminar el activo con el ID proporcionado
    activos = activos.filter(activo => activo.id !== id);
  
    // Enviar la respuesta al cliente con el código de estado 204 No Content
    res.status(204).end();
}


// Exportar las funciones del controlador
module.exports = {
  obtenerActivos,
  obtenerActivoPorId,
  crearActivo,
  actualizarActivo,
  eliminarActivo
};

