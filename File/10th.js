//largestOfThree: Given three numbers as input,  return the largest number

let largestOfThree = (num1,num2,num3) =>{
    result = (num1>num2)&&(num1>num3)?num1:(num2>num1)&&(num2>num3)?num2:num3 ;
    return result ;
}
console.log(largestOfThree(3,4,6));

console.log(largestOfThree(9,7,3));
console.log(largestOfThree(1,100000003,8));
