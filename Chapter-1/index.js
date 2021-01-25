const plays = require('./plays.json');
const invoices = require('./invoices.json');
const statement = require('./statement');

statement(invoices[0], plays);
