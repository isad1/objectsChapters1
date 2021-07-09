// 3 properties for the hours (range o to 23) minutes (range 0 to 59 ) and same for seconds as well .

function Clock(hours , minutes , seconds){
    this.hours = hours ;
    this.minutes = minutes ;
    this.seconds = seconds ;

}
var clock1 = new Clock(17,23,56);
var clock2 = new Clock(21,56,01);
var clock3 = new Clock(23,45,22);

console.log(clock1 ,clock2 , clock3);
