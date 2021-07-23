//destructuring of arrays and objects
let a, b ;
[a,b] = [11,89];
console.log(a)
console.log(b)

let [x,y,z] = [2,5,7];
console.log(z,y,x);

const aircrafts = ['F22', 'Hal Tejas', 'F18']

const [m,n,o] = aircrafts ;
console.log(m);
console.log(n);
console.log(o);


//object destructuring

const F35 = {
    name:'lockeed martin',
    generation: 5 + 'th generation',
    manufacturingCountry: 'USA',
    speed:move =()=>console.log('it ' + ' has highest speed of'+' mach 5')
    
}
const {name,generation,manufacturingCountry,speed} = F35 

console.log(name)
console.log(generation)
console.log(manufacturingCountry)
speed()

