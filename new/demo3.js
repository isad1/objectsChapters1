var user ={
    name: 'arjun',
    age: 1000
};

var clone = {}; //the new empty object

Object.assign(clone,user);

//now clone is a fully independent object with the same content

console.log(user);
console.log(clone);

clone.name = 'bahubali' ; //doesnt chane in the user object

console.log(user);
console.log(clone);

