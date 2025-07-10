const express = require('express');
const app = express();

const mockTools = require('../mock-data');

app.get('/api/tools', (req, res) => {
  res.json(mockTools);
});

module.exports = app;
