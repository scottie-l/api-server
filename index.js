'use strict';

require('dotenv').config();
const server = require('./lib/server.js');
const PORT = process.env.PORT;

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running');
    });
  },
  app,
};