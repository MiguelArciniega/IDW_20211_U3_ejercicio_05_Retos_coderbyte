let factorial = (x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
};

let bracketCombinations = (n) => {
  return factorial(2 * n) / (factorial(n + 1) * factorial(n));
};

console.log(bracketCombinations(3));
