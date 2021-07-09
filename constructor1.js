
function Employee(id, name, salary){
    this.id = id ,
    this.name = name ,
    this.salary = salary ,
    this.age = -1
}
var emp1 = new Employee(1, 'jack', 6066);
var emp2 = new Employee(2, 'kate', 4343);

console.log(typeof(emp1));
console.log(typeof(emp2));
