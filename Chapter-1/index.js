const plays = require('./plays.json');
const invoices = require('./invoices.json');
const statement = require('./statement');

console.log(statement(invoices[0], plays));
