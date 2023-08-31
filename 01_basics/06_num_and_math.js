//+++++++++++++++ Nums +++++++++++++++++++++++++
const score = 400;
// console.log(score);//400

const balance = new Number(100)
// console.log(balance);//[Number: 100]

// console.log(balance.toString().length);//100
// console.log(balance.toFixed(2));//100.00

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));//124//return price value

const hundreds = 10000000;
// console.log(hundreds.toLocaleString("en-IN"));

//++++++++++++++++++++++++++++ Maths ++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.65689));//5
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.9));//4

// console.log(Math.min(2,5,8,5,1));
// console.log(Math.max(2,5,8,5,1));

// Math.random() -> return any random value between 0 - 1 
// console.log(Math.random());// 0 - 1
// console.log((Math.random()*10) + 1);// 1 - 10
console.log(Math.floor(Math.random()*10) + 1);// 1 - 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) + min);



