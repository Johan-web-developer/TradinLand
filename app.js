require('dotenv').config();
const conectarDB = require('./config/config.js');

const Trading = require('./models/Trading.js');

conectarDB();

const trading = new Trading();

trading.listen();