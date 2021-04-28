let MinWindowSubstring = (strArr) => {
  let cad = strArr[0];
  let minCad = strArr[1].split("");

  let existsIn = (subCad) => {
    let chars = subCad.split("");
    for (let i = 0; i < minCad.length; i++) {
      let place = chars.findIndex((val) => {
        return val === minCad[i];
      });
      if (place === -1) {
        return false;
      } else {
        chars.splice(place, 1);
      }
    }
    return true;
  };

  for (let i = minCad.length; i <= cad.length; i++) {
    for (j = 0; j <= cad.length - i; j++) {
      let subCad = cad.substr(j, i);
      if (existsIn(subCad)) {
        return subCad;
      }
    }
  }
  return "Introuce solo cadenas";
};

console.log(MinWindowSubstring(["aaabaaddae", "aed"]));
