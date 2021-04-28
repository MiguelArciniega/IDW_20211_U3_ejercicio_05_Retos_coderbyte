let FindIntersection = (strArr) => { 
    var element1 = strArr[0].split(', ')
    var element2 = strArr[1].split(', ')
    var result = element1.filter(x => element2.find(a => a === x))

    return result.length > 0 ? result.join(',') : 'false';
}

// keep this function call here 
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));