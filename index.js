const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mockTools = require('./mock-data');

app.get('/tools', (req, res) => {
  res.json(mockTools);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
