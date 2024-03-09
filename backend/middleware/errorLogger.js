const { logRequest } = require('../middleware/middlewareUtils');

module.exports = (err, req, res, next) => {
  logRequest(req);
  console.error(err);
  res.status(500).send('An unexpected error occurred');
};
