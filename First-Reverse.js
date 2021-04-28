let FirstReverse = (str) => { 
    inverted = [];
    len = str.length-1;
    message = "";

    [...str].forEach((char,i) => {
        inverted[len-i] = char;
    });   
    
    inverted.forEach((char) =>{
        message += char; 
    });

    return message;
}
     
// keep this function call here 
console.log(FirstReverse("I Love Code"));