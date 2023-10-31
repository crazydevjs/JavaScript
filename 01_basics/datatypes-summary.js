// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);

console.log(id === anotherId);

const bigNumber = 326546725478362n

// Reference (Non-primitive)

// 3 types : Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "deepak",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);  // bigint
console.log(typeof outsidetemp); // object
console.log(typeof scoreValue);  // number
console.log(typeof myObj); // object
console.log(typeof myFunction); // function
console.log(typeof heros); // object
console.log(typeof anotherId); // symbol