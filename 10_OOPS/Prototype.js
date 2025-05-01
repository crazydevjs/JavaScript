// let myName = "Deepak        "

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.deepak = function(){
    console.log(`deepak is present in all objects`);
    
}

Array.prototype.heydeepak = function(){
    console.log(`Deepak says hello`);
    
}

// heroPower.deepak()

myHeros.deepak()
myHeros.heydeepak()
// heroPower.heydeepak()

// inheritance 

const User = {
    name: "deepak",
    email: "deepak@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssigment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax 

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Deepak Deodatt Mishra    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
console.log(anotherUsername.length);
"deepak".trueLength()
