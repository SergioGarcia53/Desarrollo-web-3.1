// app.js
const express = require('express');
const activoController = require('./controladores/activoController');
const ubicacionController = require('./controladores/ubicacionController');
const responsableController = require('./controladores/responsableController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas para activos
app.get('/activos', activoController.obtenerActivos);
app.get('/activos/:id', activoController.obtenerActivoPorId);
app.post('/activos', activoController.crearActivo);
app.put('/activos/:id', activoController.actualizarActivo);
app.delete('/activos/:id', activoController.eliminarActivo);

// Rutas para ubicaciones
app.get('/ubicaciones', ubicacionController.obtenerUbicaciones);
app.get('/ubicaciones/:id', ubicacionController.obtenerUbicacionPorId);
app.post('/ubicaciones', ubicacionController.crearUbicacion);
app.put('/ubicaciones/:id', ubicacionController.actualizarUbicacion);
app.delete('/ubicaciones/:id', ubicacionController.eliminarUbicacion);

// Rutas para responsables
app.get('/responsables', responsableController.obtenerResponsables);
app.get('/responsables/:id', responsableController.obtenerResponsablePorId);
app.post('/responsables', responsableController.crearResponsable);
app.put('/responsables/:id', responsableController.actualizarResponsable);
app.delete('/responsables/:id', responsableController.eliminarResponsable);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
