let CodelandUsernameValidation = (str) => { 
    isValid = true;
    len = str.length;

    !(len >= 4 && len <= 25) ? isValid = false : null;

    !str[0].match(/[a-z]/i) ? isValid = false : null;

    [...str].forEach((char) => {
        !char.match(/[a-z0-9_]/i) ? isValid = false : null;
    });

    str[len-1] === '_' ? isValid = false : null;

    return isValid;
}
     
console.log(CodelandUsernameValidation("u__hello_world123"));