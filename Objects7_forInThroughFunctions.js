var ford = {
            name: 'Aspire',
            color: 'red' ,
            //start is a behaviour of car
            //which starts the car
            start : function(){
                    console.log('car started');
            },
            move : function(){
                    console.log('car is moving');
            }
};

for(property in ford)
    console.log(property + ':' + ford[property]);

ford.move();
ford.start();