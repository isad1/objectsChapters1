//Accessing all properties & values 
//present in an object using for....in loop

var msg1 = {
    from : 8910000000 ,
    msg : 'que tal' ,
    delivered : true ,
    read : false ,
    to : 9100000000
};

//get all the properties defined in
//the object msg1

for(prop in msg1)
console.log(prop);


//properties and values
for(property in msg1)
    console.log(property + ":" + msg1[property]);

console.log('---------');
console.log(msg1['delivered']);

var KeyX = 'delivered' ;
console.log(msg1[KeyX]) ;
