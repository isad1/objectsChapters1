//Adding and deleting new property to an existing object

var msg1 ={
            from: 9100000000,
            to: 8300000000,
            delivered: true ,
            read: false ,
            msg: 'hoy me siento feliz, y tu? '
}

//properties and values
for(property in msg1)
    console.log(property + ":" + msg1[property]);

console.log('--------------');

//now we are adding property

msg1.timeStamp = 12 ;

for(property in msg1)
    console.log(property + ':' + msg1[property]);
console.log('---------------')

//Now deleting a property
delete msg1.from;
for(property in msg1)
    console.log(property + ':' + msg1[property]);