//13. write a function that accepts an integer and returns the digits repeated twice

let repeatedDigits = (num) => {
    let digits = num.toString();
    return digits.repeat(2);
}

console.log(repeatedDigits(89));
console.log(repeatedDigits(972));
