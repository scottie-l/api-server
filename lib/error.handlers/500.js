'use strict';

module.exports = function(err, req, res, next) {
  console.log('An error has been found');
  const error = err.message ? err.message : err;
  res.status(500).send(error);
};