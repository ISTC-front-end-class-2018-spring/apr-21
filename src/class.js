const sum = (x, y) => {
  if (typeof x === 'number' && typeof y === 'number')
    return x+y;
  return 'invalid';
}

const factorial = num => {
  if (typeof num !== 'number')
    return 'invalid';
  num = Math.abs(num);
  if (num === 0)
    return 1;
  return num * factorial(num-1);
}

module.exports = {
  sum,
  factorial
}