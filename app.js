const express = require('express');
const app = express(); // Crear una instancia de la aplicación Express

// Middleware para parsear JSON
app.use(express.json());

// Routers para cada recurso
const activosRouter = require('./router/activos');
const ubicacionesRouter = require('./router/ubicaciones');
const responsablesRouter = require('./router/responsables');

// Configurar la aplicación para usar los routers de cada recurso
app.use('/activos', activosRouter);
app.use('/ubicaciones', ubicacionesRouter);
app.use('/responsables', responsablesRouter);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

