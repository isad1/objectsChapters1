//Creating object using new keyword / Object () constructor

var myCar = new Object();  //Object constructor
myCar.name = 'Tiago' ;
myCar.model = 2018 ;
myCar.speed = 0 ;
myCar.color = 'orange' ;
myCar.move = function(){
    this.speed++ ;
}

console.log(myCar.move);
console.log(myCar.name);
console.log(myCar.color);
console.log(myCar);
myCar.move(); myCar.move(); myCar.move();
myCar.move();
myCar.move();
console.log(myCar.speed);
