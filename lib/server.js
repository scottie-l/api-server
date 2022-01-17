'use strict';

const express = require('express');
const app = express();
const err404 = require('./error-handlers/404.js');
const err500 = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

const foodRoute = require('./routes/food.js');
const clothesRoute = require('./routes/clothes.js');

app.use(express.json());
app.use(logger);
app.use(foodRoute);
app.use(clothesRoute);
app.use('*', err404);
app.use(err500);

module.exports = {
    start: (port) => {
        app.listen(port, () => {
            console.log('Server is running');
        });
    },
    app,
};
