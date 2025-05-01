class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const deepak = new Teacher("deepak", "deepak@fb.com", "123")

deepak.addCourse()
deepak.logMe()

const abhay = new User("abhay")

abhay.logMe()

console.log(deepak instanceof Teacher);

