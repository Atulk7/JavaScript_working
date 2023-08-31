const name = "atul";//1-declaration
const repoCount = 50;

// console.log(name + repoCount + " value");

// console.log(`hello my name is ${name} and my repoCount ${repoCount}`);

const gameName = new String("atul-kevat-com");//2-declaration
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());//ATULKEVAT
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,4);//exclude 4th index
// console.log(newString);

const anotherString = gameName.slice(-8,4);
// console.log(anotherString);

const newStringOne = "   hitesh  hitesh  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());//it removes starting and end spaces and line terminator.

const url = "https://atul.com/hitesh%20choudhary";
// console.log(url.replace("%20", "-"));//replace() method.

// console.log(url.includes("hitesh"));//includes().

console.log(gameName.split('-'));//return an array and split based on some delimeter






