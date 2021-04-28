let BracketMatcher = (str) => {
  let right = 0;
  let left = 0;

  [...str].forEach((element, i) => {
    str[i] === "(" ? left++ : str[i] === ")" ? right-- : null;
  });

  if (right === left) {
    return 1;
  } else {
    return 0;
  }
}

console.log(BracketMatcher("(c(oder)) b(yte)"));