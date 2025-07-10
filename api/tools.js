const mockTools = require('../mock-data');

module.exports = (req, res) => {
  res.status(200).json(mockTools);
};


