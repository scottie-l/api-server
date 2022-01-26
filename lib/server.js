'use strict';

// dependencies
const express = require('express');
const app = express();

// routes
const foodRoutes = require('./routes/food.js');
const clothesRoute = require('./routes/clothes.js');

// errorhandlers
const err404 = require('./error.handlers/404.js');
const err500 = require('./error.handlers/500.js');

// use
app.use(express.json());
app.use(foodRoutes);
app.use(clothesRoute);

// error handlers at the bottom
app.use('*', err404);
app.use(err500);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is listening on ', port);
    });
  },
  app,
};

// Use to start server
// pg_ctl -D /home/linuxbrew/.linuxbrew/var/postgres start