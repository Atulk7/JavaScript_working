// # Primitive data type
// 7 types : String, Number, Boolean, null, undefiend, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId); //false

// const bigNumber = 4237423482374423n;

// # Reference type
// Array, Objects, Functions
//Array
const heros = ["shaktiman", "naagraj", "doga"];
//Object
let myObj = {
  name: "atul",
  age: 26
};

//function
const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof outsideTemp );//object
// console.log(typeof anotherId );//symbol
// console.log(typeof myFunction );//function object


//++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive)-> always a get a copy, heap(non-primitive)-> always get a memory address

let myYoutubeName = "hiteshchoudharydotcom";

let anotherName = myYoutubeName;
anotherName = "chaiaurcode";

// console.log(anotherName);//chaiaurcode
// console.log(myYoutubeName);//hiteshchoudharydotcom

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "atul@google.com";

console.log(userOne.email);
console.log(userTwo.email);
