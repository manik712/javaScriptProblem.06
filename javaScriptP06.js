const numbers = [1, 3, 8, 7, 8, 1, 6, 4, 2,2];

const result = numbers.filter(function(value, index, array) {
  return array.indexOf(value) !== index;
});

console.log(result);