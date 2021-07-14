//Iterating through an array using for loop and for of loop

var myArray = new Array (true, "orange", "Red", "pink", 5, 6, 4.10);
//displaying content of array
console.log(myArray) ;

//for loop to iterate through the array
for(var i=0 ; i<myArray.length ; i++)
    console.log("the following result are: ",myArray[i]);

//we can acheive by also using for...of loop to iterate through the array

for(item of myArray)
    console.log(item);