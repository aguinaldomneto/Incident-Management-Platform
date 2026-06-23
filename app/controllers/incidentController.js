const db = require('../database/database');

const getIncidentById = (req, res) => {

  const { id } = req.params;

  db.get(
    'SELECT * FROM incidents WHERE id = ?',
    [id],
    (err, row) => {

      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      if (!row) {
        return res.status(404).json({
          message: 'Incidente não encontrado'
        });
      }

      res.json(row);

    }
  );

};

const getAllIncidents = (req, res) => {

  db.all(
    'SELECT * FROM incidents',
    [],
    (err, rows) => {

      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      res.json(rows);

    }
  );

};

const createIncident = (req, res) => {

  const {
    system_name,
    severity,
    description
  } = req.body;

  db.run(
    `
      INSERT INTO incidents
      (
        system_name,
        severity,
        description
      )
      VALUES
      (?, ?, ?)
    `,
    [system_name, severity, description],
    function(err) {

      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      res.status(201).json({
        message: 'Incidente criado com sucesso',
        incident_id: this.lastID
      });

    }
  );

};
const updateIncidentStatus = (req, res) => {

  const { id } = req.params;

  const { status } = req.body;

  const validStatus = [
    'OPEN',
    'IN_PROGRESS',
    'RESOLVED',
    'CLOSED'
  ];

  if (!validStatus.includes(status)) {
    return res.status(400).json({
      message: 'Status inválido'
    });
  }

  db.run(
    `
      UPDATE incidents
      SET status = ?
      WHERE id = ?
    `,
    [status, id],
    function(err) {

      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      if (this.changes === 0) {
        return res.status(404).json({
          message: 'Incidente não encontrado'
        });
      }

      res.json({
        message: 'Status atualizado',
        status
      });

    }
  );

};
module.exports = {
  getAllIncidents,
  createIncident,
  getIncidentById,
  updateIncidentStatus
};
