//Property pointing to a function (method)

var myCar = {
    name : 'Tiago',
    model : 2018 ,
    color : 'orange' ,
    speed : 0 ,
    move : function(){
         this.speed++ ;
    }
};

myCar.move();
console.log(myCar);
myCar.move();
myCar.move();
myCar.move();
console.log(myCar);
