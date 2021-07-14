var user = {
    name:'arjun',
    age: 1000
};

var clone = {};

//lets copy  all user properties into it
for(let key in user){
    clone[key] = user[key];
}

//new clone is a fully independent object with the same content

console.log(user);
console.log(clone);

clone.name = 'bahubali' ; //doesnt change in the user object

console.log(user);
console.log(clone)