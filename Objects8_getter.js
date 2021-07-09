//getter example

var emp = {
    name: 'jack' ,
    salary: "Rs" + " " + 60600 ,
    city: 'Banglaore' ,
    get empCity() {
        return this.city
    },
    get empName() {
        return this.name
    },
    get empSalary() {
        return this.salary
    }

};

console.log(emp.empSalary);
console.log(emp.empCity);
console.log(emp.empName);
console.log(emp);
