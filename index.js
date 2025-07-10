app.get('/', (req, res) => {
  res.send('Hilti OnTrack Middleware is running! Go to /tools to see the data.');
});
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mockTools = require('./api/mock-data');

app.get('/tools', (req, res) => {
  res.json(mockTools);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
