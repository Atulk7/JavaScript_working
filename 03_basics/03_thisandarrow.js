const user = {
  username: "Atul kevat",
  price: 99,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()

// console.log(this);//{} empty current object

// function chai(){
//     let username = "Hitesh";
//     console.log(this.username);
// }

// chai();//undefined => because here, this work inside a object -> didn't work inside function()

// const chai = function(){
//     let username = "Hitesh";
//     console.log(this.username);
// }

// chai()//undefined

// ---------------------------------------
// functions declaration using arrow

const chai = () => {
  let username = "Hitesh";
  console.log(this.username);
  console.log(this);//{}
};

// chai();//undefined

//Arrow function----->  const variable = () => {}
//Basic arrow function
// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(3,4));



//implicit return arrow function
// const addTwo = (num1,num2) => num1+num2;
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => (num1+num2);
// console.log(addTwo(3,4));

//return object
const addTwo = (num1,num2) => ({username: "Atul"})
console.log(addTwo(3,4));



//arrow in array
// const myArr = [3,6,9,1];
// myArr.forEach(() => {})



