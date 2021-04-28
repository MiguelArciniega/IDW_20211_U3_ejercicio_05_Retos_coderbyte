let TreeConstructor = (strArr) => {
  const nodes = strArr.map((i) => i
      .replace(/[\(\)]/, "")
      .split(",")
      .map((i) => parseInt(i))
  );

  const childNodes = nodes.map((i) => i[0]);
  const parentNodes = nodes.map((i) => i[1]);

  return !(
    ("_" + parentNodes.sort().join("_") + "_").match(/(_\d+)\1\1_/) ||
    ("_" + childNodes.sort().join("_") + "_").match(/(_\d+)\1_/)
  );
}

// keep this function call here
console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
