// Q1. Write a JavaScript function to check whether a string is blank or not?
// File name suggestion: isBlank.js
// Test Data :
// console.log(isBlank(ââ)); // true
// console.log(isBlank(âabcâ)); // false 

const isBlank = (str) => {
    if(str.length === 0)
    return true;
    else
    return false;
}

console.log(isBlank("")); // true
console.log(isBlank("abc")); // false 
