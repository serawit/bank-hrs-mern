const express = require('express');
const router = express.Router();
const Report = require('../models/Report');

router.post('/', async (req, res) => {
  const report = new Report(req.body);
  await report.save();
  res.json(report);
});

router.get('/', async (req, res) => {
  const reports = await Report.find().populate('submittedBy', 'name email');
  res.json(reports);
});

module.exports = router;
