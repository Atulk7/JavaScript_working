// Dates

let myDate = new Date();
// console.log(myDate);//2023-09-01T06:37:33.237Z

// console.log(typeof myDate);//object

//let check after converting date to string
// console.log(myDate.toString());//Fri Sep 01 2023 06:41:20 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());//Fri Sep 01 2023
// console.log(myDate.toLocaleString());//9/1/2023, 6:44:04 AM
// console.log(myDate.toTimeString());//06:44:04 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleDateString());//9/1/2023
// console.log(myDate.toLocaleTimeString());//6:46:08 AM

// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

// let myCreatedDate = new Date(2023,0,23,5,3);
// console.log(myCreatedDate.toLocaleString());//1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2033-01-14");//yy/mm/dd
// console.log(myCreatedDate.toLocaleString());//1/14/2033, 12:00:00 AM

let myCreatedDate = new Date("01-14-2023"); //mm/dd/yy
// console.log(myCreatedDate.toLocaleString());//1/14/2033, 12:00:00 AM

let myTimeStamp = Date.now();
// console.log(myTimeStamp);//1693551343917 - millosecond from 01/01/1970 to 01-09-2023
// console.log(myCreatedDate.getTime());//1673654400000

//convert to second
// console.log(Math.floor(Date.now()/1000));//1693551571180----1693551653

let newDate = new Date();
// console.log(newDate.getMonth());//8 month indexing start from zero-0
// console.log(newDate.getDay()); //5-friday
// console.log(newDate.getFullYear()); //2023

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
