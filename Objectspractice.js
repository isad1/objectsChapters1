function Car(name,colour,weight,unitNo){
    this.name = name ;
    this.colour = colour ;
    this.weight = weight ;
    this.unitNo = unitNo ;
    this.topSpeed = function(){
        console.log(this.name + ' enjoys speed of ' + 200)
    } ;
    this.mileage = function(){
        console.log(this.name + ' enjoys mileage of ' + 16 + ' km/hr ')
    }
}

var car1 = new Car('baleno' , 'red' , 290 , 2349);
var car2 = new Car('i20' , 'black' , 300 , 8907);
console.log(car1);
console.log(car2);
console.log(car1.name);
car1.mileage();
car2.mileage();
car1.topSpeed();
car2.topSpeed();
