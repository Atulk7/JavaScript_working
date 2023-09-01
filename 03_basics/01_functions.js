//Functions on javascript

function sayMyName() {
  console.log("A");
  console.log("T");
  console.log("U");
  console.log("L");
}

// sayMyName();//CALLING A FUNCTION

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers();//NaN
// addTwoNumbers(4,5);//9
// const result = addTwoNumbers(4,5);//9
// console.log(result);//undefined

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result;

  console.log("atul");
  return number1 + number2;
  console.log("atul");
}

// const result = addTwoNumbers(4,5);
// console.log("Result: " +result);//atul 9

//
function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username ");
    return;
  }
  return `${username} just logged in`;
}

//  console.log(loginUserMessage("atul"));//atul just logged in
//  console.log(loginUserMessage(""));//_just logged in
// console.log(loginUserMessage()); //undefined just logged in***

//++++++++++++++++++++++++++++++++++++++++++++++++++++
//when we didn't know about number of parameters 

function calculateCardPrice(num1){
    return num1;
}

// console.log(calculateCardPrice(100,200,300));//100

//taking multiple parameter using ++++++rest operator+++++
function calculateCardPrice1(...num1){
    return num1;
}

// console.log(calculateCardPrice1(100,200,300));//[100,200,300]

function calculateCardPrice2(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCardPrice2(100,200,300,2000,3000));
//val1 = 100
//val2 = 200
// num1 = [300,2000,3000]

//+++++++++++++++++++++++++++++++++++++++++
//HOW TO PASS OBJECT INTO FUNCTION AND HOW TO USE IT
//+++++++++++++++++++++++++++++++++++++++++++++++++++

const user = {
    username: "Atul",
    price: 199
}


function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
  username: "Atul Kevat",
  price: 399
})


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
////HOW TO PASS ARRAYS INTO FUNCTION AND HOW TO USE IT
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myNewArray = [
  200,
  400,
  600
];

function returnSecondValue(getArray){
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([
  200,
  400,
  600
]))