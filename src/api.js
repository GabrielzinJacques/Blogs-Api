const express = require('express');
const router = require('./database/routes/index');
// ...

const app = express();

app.use(express.json());

app.use(router);

app.use((error, req, res, _next) => {
  if (error.status) return res.status(error.status).json({ message: error.message });
  return res.status(500).json({ message: error.message });
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
