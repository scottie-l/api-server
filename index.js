'use strict';

const { start, app } = require('./lib/server.js');
const { db } = require('./lib/models');
const PORT = process.env.PORT || 3000;

// must import db, initialize it to perform routes/tests
db.sync()
  .then(() => start(PORT))
  .catch(err => console.log(err));
  