const user = {
    username: "Deepak",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
        
        
    }

}
const user2 = {
    username: "Abhay",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
        
        
    }

}

// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);

// const promise = new Promise()

const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    // return this
}

const userOne = new User("Deepak", 12, true)
const userTwo = new User("Abhay", 8, false)

console.log(userOne);
console.log(userTwo);
console.log(userOne.greeting());
