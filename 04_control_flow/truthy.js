const userEmial = "a@atul.ai"//Got user email!!!
// const userEmial = ""//Don't have user email

// if (userEmial) {
//   console.log("Got user email!!!");
// } else {
//   console.log("Don't have user email");
// }

// -------------------------------------------------
//falsy values

// false , 0 , -0 , BigInt 0n , "" , undefined , null, NaN

// ----------------------------------------------
//truthy values

// "0" -> zero inside double quotes consider as string
// 'false' -> false inside double quote consider as string
// " " -> double quote wuth space consider as string
// [] -> empty array
// {} -> empty object
// function(){} -> empty function

// const arr = [];

// if(arr.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {};
// //Object.keys(emptyObj) -> now we found array

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }


// --------------------------------------------------------
//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;//5
// val1 = null ?? 10;//10
// val1 = undefined ?? 15;//15
val1 = null ?? 10 ?? 25;//10

console.log(val1);


// ----------------------------------------
// Ternary Operator
// condition ? true : false;//syntax

const iceTeaPrice = 70;
iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80");