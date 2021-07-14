var user = {name: 'lakshman'};

var loggedInUser = {name:'lakshman'};
var permission1 = {canView: true};
var permission2 = {canRead: true};

//copies all properties from permission1 , permission2

Object.assign(user,loggedInUser,permission1,permission2);

//nowUser = {name:'lakshman', canView:true, canRead:true}

console.log(user);