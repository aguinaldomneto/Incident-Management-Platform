const express = require('express');

const router = express.Router();

const {
  getAllIncidents,
  createIncident,
  getIncidentById,
  updateIncidentStatus
} = require('../controllers/incidentController');

router.get('/', getAllIncidents);

router.post('/', createIncident);

router.get('/:id', getIncidentById);

router.patch('/:id/status', updateIncidentStatus);

module.exports = router;

