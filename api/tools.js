const mockTools = require('../mock-data.js');

module.exports = (req, res) => {
  res.status(200).json(mockTools);
};


