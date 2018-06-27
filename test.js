var filename = process.argv[2];

var assert = require('assert');
var format = require(filename || './index.js');

assert.throws(function() { format(null, ''); }, format.errorMessage);
assert.throws(function() { format('', null); }, format.errorMessage);

[
  {pattern: '', value: '4111111111111111', expected: '4111111111111111'},
  {pattern: '**** **** **** ****', value: '4111111111111111', expected: '4111 1111 1111 1111'},
  {pattern: '**** **** **** ****', value: '************1111', expected: '**** **** **** 1111'},
  {pattern: '9999 9999 9999 9999', value: '************1111', expected: '1111'},
  {pattern: '**** **** **** ****', value: '411111111111111122', expected: '4111 1111 1111 111122'},
  {pattern: '**** **** **** ****', value: '41111111', expected: '4111 1111'},
  {pattern: '**** **** **** ****', value: '411111111', expected: '4111 1111 1'},
  {pattern: '(999) 999-9999', value: '12345 67789', expected: '(123) 456-7789'},
  {pattern: '(999) 999-9999', value: '12A345 677B89', expected: '(123) 456-7789'},
  {pattern: '(AAA) 999-9999', value: 'GG23O45 67789', expected: '(GGO) 456-7789'},
  {pattern: 'A AAAA AAA', value: 'ILOVEFOOD!', expected: 'I LOVE FOOD!'},
].forEach(function(the) {
  assert.equal(format(the.pattern, the.value), the.expected);
  console.log(the.value, the.expected);
});

console.log('done testing!');