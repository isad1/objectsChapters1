//Setter example
var emp = {
    name: "Adriana" ,
    salary: "Rs" + " " + 60600 ,
    city: "Bangalore" ,

    set empCity(empCity){
        this.city = empCity ;
    },
    set empName(empName){
        this.name = empName ;
    }
};
emp.empCity = "mysore" ;
emp.empName = "kryss" ;

console.log(emp["name"]);
console.log(emp.city);
console.log(emp);
