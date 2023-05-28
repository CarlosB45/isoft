const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

//


// Configuración de middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

