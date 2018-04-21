const mocha = require('mocha');
const assert = require('chai').assert;

const {
  sum,
  factorial
} = require('../src/class');

describe('sum function', () => {
  it('returns the sum of 2 numbers', ()=>{
    const result = sum(5, 6);
    assert.equal(result, 11);
  });

  it('returns invalid if given arguments are not numbers', ()=>{
    assert.strictEqual(sum('a', null), 'invalid');
  });
});

describe('factorial function', () => {
  it('returns the factorial of the number', () => {
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(-6), 720);
    assert.strictEqual(factorial(0), 1);
  });

  it('returns "invalid" if argument given is not a number', () => {
    assert.strictEqual(factorial(null), 'invalid');
    assert.strictEqual(factorial(undefined), 'invalid');
    assert.strictEqual(factorial('string'), 'invalid');
  });
});