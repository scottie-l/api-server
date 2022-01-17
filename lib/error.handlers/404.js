'use strict';

module.exports = function(req, res, next) {
  res.status(404).send('No route not found here');
};
