const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function(acc, curr) {
//     console.log(`acc: ${acc}, curr: ${curr}`);
    
//     return acc + curr;
// }, 0)

const myTotal = myNums.reduce((acc, curr) => {
    console.log(`acc: ${acc}, curr: ${curr}`);
    
    return acc + curr;
}, 0)

console.log(myTotal);

const shopingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "rb course",
        price: 1999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "ds course",
        price: 3999
    },
]

const totalPrice = shopingCart.reduce((acc, curr) => {
    console.log(`acc: ${acc}, curr: ${curr}`);
    
    return acc + curr.price;
}, 0)
console.log(totalPrice);