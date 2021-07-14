//Creating an array using new keyword
myArray = new Array(10) ;
//size is 10 but index value range is from 0 to 9
console.log(myArray.length) ;
console.log(myArray[1000]) ;
//We know in JS we get undefined in above kind of situations
myArray[100] = 'chtrapati shivaji maharaja' ;
myArray[0] = 111 ;
console.log(myArray[0]) ;
console.log(myArray[100]) ;
console.log(myArray.length) ;
console.log(myArray[200]) ;
console.log(myArray[200]) ;
console.log(myArray.length) ;
console.log(myArray[-1]) ;
console.log(myArray[80]) ;

myArray[-1] = 'raja dahir' ;
console.log(myArray[-1]) ;
console.log(myArray.length) 