var user = { name: 'karan'};

var permission1 = {canView:true};
var permission2 = {canEdit:true};

//copies all properties from permission1 and permission2 into user

Object.assign(user,permission1,permission2);

//now user = {name:'karan',canView:true ,canEdit:true}

console.log(user);