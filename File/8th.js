//8.Multiple37 : given a number n return true if it is divisible by either 3 or 7

let Multiple37 = (num) =>(num%7==0||num%3==0)||(num%7==0)||(num%3==0)?true:false ;

console.log(Multiple37(33));
console.log(Multiple37(21));
console.log(Multiple37(35));
console.log(Multiple37(13));
