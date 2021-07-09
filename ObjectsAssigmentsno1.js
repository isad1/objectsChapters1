//1.Create 2 objects car1 , car2 with 8 properties and 3 behaviours using object literal


var  car1 = {
    Name : 'Baleno',
    Version : 2019 ,
    Colour: 'Red' ,
    Weight: 'More than ' + 250 + ' kgs' ,
    Airconditioner: true ,
    PowerWindow: true ,
    Manufacturer: 'Maruti suzuki' ,
    Mileage: 16 ,
    TopSpeed: function(){
        console.log('its topmost speed is ' + 220);
    },
    Serviciability: function(){
        console.log('In every ' + 1 + ' it needs service');
    },
    ExtraBenefits: function(){
        console.log('If it bought between ' + 7 + ' to ' + 17 + ' buyer will get ' + 10 + ' extra discount' )
    }

};


var  car2 = {
    Name : 'I20',
    Version : 2018 ,
    Colour: 'Black' ,
    Weight: 'More than ' + 270 + ' kgs' ,
    Airconditioner: true ,
    PowerWindow: true ,
    Manufacturer: 'Hyundai' ,
    Mileage: 14 ,
    TopSpeed: function(){
        console.log('its topmost speed is ' + 240);
    },
    Serviciability: function(){
        console.log('In every ' + 1.5 + ' it needs service');
    },
    ExtraBenefits: function(){
        console.log('If it bought between ' + 17 + ' to ' + 27 + ' buyer will get ' + 10 + ' extra discount' )
    }

};

console.log(car1);
console.log(car2);
car1.TopSpeed();
car2.TopSpeed();
car1.Serviciability();
car2.Serviciability();
car1.ExtraBenefits();
car2.ExtraBenefits();
