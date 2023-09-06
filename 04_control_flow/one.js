//if

const temperature = 41;

// if (temperature < 50) {
//   //if condition == true then control will come into if block otherwise skip the if block
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }
//3 != 2 -> true
// 2 == "2" -> true
// 2 === "2" -> false(here type is also check for both operand)
// comperision operators <, > , <=, >= , ==, === , !=, !==


// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`User Power : ${power} `);
//     console.log(`User Score : ${score} `);

// }

// console.log(`User Power : ${power} `);// power is not defined



const balance = 1000;
// if(balance > 500)
//     console.log("test"),
//     console.log(test);

// if(balance < 500){
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const isUserLogedIn = true;
const debitCard = true
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isUserLogedIn && debitCard)
    console.log("allow to buy courses!!!");

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("logged In");
}