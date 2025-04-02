// singleton 

// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "Deepak",
    "full name": "Deepak Deodatt Mishra",
    [mySym]: "mykey1",
    age: 21,
    location: "Gyanpur",
    email: "deepak@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "deepak@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "deepak@microsoft.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
