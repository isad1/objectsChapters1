//2.Store & display 5 employee details ( should have at least 5 properties and 2 behaviours ) using object constructor

var Employee1 = new Object ();
    Employee1.name = 'Arjun';
    Employee1.id = 567;
    Employee1.joiningDate = 15 + ' march' ;
    Employee1.age = 28 ;
    Employee1.city = 'Bengalore' ;
    Employee1.educationDetails = function(){
            console.log(' BE')
    };
    Employee1.package = function(){
        console.log('Rs ' + 50000 + ' per month')
    };



    var Employee2 = new Object ();
    Employee2.name = 'Abhimanyu';
    Employee2.id = 577;
    Employee2.joiningDate = 20 + ' march' ;
    Employee2.age = 27 ;
    Employee2.city = 'Gurugram' ;
    Employee2.educationDetails = function(){
            console.log(' BCA')
    };
    Employee2.package = function(){
        console.log('Rs ' + 45000 + ' per month')
    };

    
    var Employee3 = new Object ();
    Employee3.name = 'Sakshi';
    Employee3.id = 497;
    Employee3.joiningDate = 30 + ' march' ;
    Employee3.age = 25 ;
    Employee3.city = 'Noida' ;
    Employee3.educationDetails = function(){
        console.log(' BBA')
    };
    Employee3.package = function(){
        console.log('Rs ' + 40000 + ' per month')
    };

    
    var Employee4 = new Object ();
    Employee4.name = 'Priya';
    Employee4.id = 307;
    Employee4.joiningDate = 05 + ' march' ;
    Employee4.age = 29 ;
    Employee4.city = 'Mumbai' ;
    Employee4.educationDetails = function(){
        console.log(' BA')
    };
    Employee4.package = function(){
        console.log('Rs ' + 47000 + ' per month')
};


   
    var Employee5 = new Object ();
    Employee5.name = 'karan';
    Employee5.id = 709;
    Employee5.joiningDate = 19 + ' march' ;
    Employee5.age = 31 ;
    Employee5.city = 'Ahmedabad' ;
    Employee5.educationDetails = function(){
          console.log(' BE')
    };
    Employee5.package = function(){
          console.log('Rs ' + 60000 + ' per month')
};


console.log(Employee1);
console.log(Employee2);
console.log(Employee3);
console.log(Employee4);
console.log(Employee5);



