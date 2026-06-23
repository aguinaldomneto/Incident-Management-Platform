const incidentRoutes = require('./routes/incidentRoutes');
const express = require('express');
const db = require('./database/database');
const app = express();
const logger = require('./middlewares/logger');
app.use(express.json());
app.use(logger);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    application: 'Incident Management Platform',
    version: '1.0.0',
    status: 'running'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    service: 'incident-management-platform',
    timestamp: new Date().toISOString()
  });
});

app.use('/incidents', incidentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
