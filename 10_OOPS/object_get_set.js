const User = {
    _email: 'd@dm.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        return this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        return this._password = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
