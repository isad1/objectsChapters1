//adding function to an existing object
var ford = {name: 'Aspire' ,
            color: 'Orange'
}
ford.printDetails = function (){
    console.log(this.name + ' ' + this.color);
}

ford.printDetails();

console.log(ford);
