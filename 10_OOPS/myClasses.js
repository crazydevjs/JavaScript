// ES6 

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const deepak = new User("deepak", "deepak@fb.com", "123")

console.log(deepak.encryptPassword());
console.log(deepak.changeUsername());


// behind the scence 

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const abhay = new user("abhay", "abhay@fb.com", "456")

console.log(abhay.encryptPassword());
console.log(abhay.changeUsername());