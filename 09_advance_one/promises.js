const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task 
    // DB calls, cryptography, network

    setTimeout(function(){
       console.log('Asyn task is complete');
       resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject0){
    setTimeout(function(){
        console.log('Asyn task 2 is complete');
       resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(reslove, reject){
    setTimeout(function(){
        reslove({username: "Deepak", email: "dt1702281@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            reslove({username: "Deepak", password: "123"})
        } else {
            reject('ERROR: Somthing went wrong')
        }
       
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
    
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("The promise is either resolved or reject");
    
})

