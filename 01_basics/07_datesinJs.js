// Dates

let myDates = new Date()
console.log(myDates.toString()); // Tue Oct 31 2023 18:55:54 GMT+0000 (Coordinated Universal Time)
console.log(myDates.toDateString()); // Tue Oct 31 2023
console.log(myDates.toISOString()); // 2023-10-31T18:55:54.498Z
console.log(myDates.toJSON()); // 2023-10-31T18:55:54.498Z
console.log(myDates.toLocaleDateString()); // 10/31/2023
console.log(myDates.toLocaleString()); // 10/31/2023, 6:55:54 PM
console.log(myDates.toLocaleTimeString()); // 6:55:54 PM

// let myCreatedDate = new Date(2003, 1, 12)
let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDate()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})