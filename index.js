const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import your mock data from the api folder
const mockTools = require('./api/mock-data');

app.get('/tools', (req, res) => {
  res.json(mockTools);
});

app.get('/', (req, res) => {
  res.send('Hilti OnTrack Middleware is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
