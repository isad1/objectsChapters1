//9. addForThird : given three numbers a , b and c return true if the sum of any two equals the third number

let addForThird = (a,b,c) => {
    let num1 = a + b ;
    let num2 = b + c ;
    let num3 = c + a ;
    result = (num1==c)||(num2==a)||(num3==b)?true:false ;
    return result ;
}

console.log(addForThird(1109,7,8));
console.log(addForThird(4,4,8));
console.log(addForThird(8,4,4));
console.log(addForThird(5,10,5));


//it is not right correct it

