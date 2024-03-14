const express = require('express');
const cors = require('cors');
const activoController = require('./controladores/activoController');
const ubicacionController = require('./controladores/ubicacionController');
const responsableController = require('./controladores/responsableController');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/activos', activoController.obtenerTodosActivos);
app.get('/ubicaciones', ubicacionController.obtenerTodasUbicaciones);
app.get('/responsables', responsableController.obtenerTodosResponsables);

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
