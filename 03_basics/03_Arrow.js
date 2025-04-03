const user = {
    username: "deepak",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);

    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "deepak"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "deepak"
//     console.log(this.username);
// }
const chai = () => {
    let username = "deepak"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => {username: "deepak"}




console.log(addTwo(3, 4))

// const myArray = [2, 3, 5, 3, 8]

// myArray.forEach()