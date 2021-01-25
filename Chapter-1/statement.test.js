const assert = require('assert');
const plays = require('./plays.json');
const invoices = require('./invoices.json');
const statement = require('./statement');

describe('statement tests', function () { 
  it('returns correct output', function () {
    assert.strictEqual(
      statement(invoices[0], plays),
      'Statement for BigCo\n' +
      ' Hamlet: $650.00 (55 seats)\n' +
      ' As you like it: $580.00 (35 seats)\n' +
      ' Othello: $500.00 (40 seats)\n' +
      'Amount owed is $1,730.00\n' +
      'You earned 47 credits\n'
    );
  });
});