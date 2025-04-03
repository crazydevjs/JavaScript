// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNRCTED`);
})();

((name) => {
    console.log(`DB CONNRCTED TWO ${name}`);
})('deepak')

