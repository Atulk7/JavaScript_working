//Scopes
// var =>
// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// var c = 300;

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
//   c = 30;
// }

//console.log(a);//error
//console.log(b); //error
//console.log(c); //30 -> why ??????

// -------------------------------------
// let =>
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   console.log("INNER: "+ a);//10
}

// console.log(a);//300

// ---------------------------------------------------
//NESTED SCOPE

function one() {
  const username = "Atul Kevat";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  two();

  // console.log(website);
}

// one();

// ------------------------------------------------

if (true) {
  const username = "Atul Kevat";
  if (username === "Atul Kevat") {
    const website = " youtube"; 
    // console.log(username + website);
  }
//   console.log(website);//error because of scope
}

// console.log(username);//error because of scope



// ++++++++++++++++++++ intresting concept ++++++++++++
//what happend if we call function before function declaration
console.log(addone(5));

function addone(num){
    return num+1;
}
//addone(5)
//==============
addTwo(5);//it gives error

const addTwo = function(num){
    return num+2;
}

//addTwo(5)