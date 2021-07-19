//LargerThanOne: Given three numbers as input , num1, num2 , num3 , return true if num1 is greater than
//at least one of num2 and num3. do not use if statement to solve this problem--haha i never use if
//condition

let largerThanOne = (num1,num2,num3) => (num1>num2) || (num1>num3)? true : false ;
console.log(largerThanOne(9,12,8));
console.log(largerThanOne(7,9,16));
console.log(largerThanOne(4,3,2));
