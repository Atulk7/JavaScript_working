// when we create object via constructor that means that object is singleton object
// -constructor object => singleton
// new Object();



// -object literals => non-singleton
const mySym = Symbol("key1");//create a Symbol

const JsUser = {
  "name": "Atul",
  "full name": "Atul Kevat",
  [mySym]: "myKey1",
  "age": 19,
  "location": "Jaipur",
  "email": "atul@google.com",
  "isLoggedIn": false,
  "lastLoginDays": ["Monday", "Saturday"],
};

//accessing object
// console.log(JsUser.email);
// console.log(JsUser["location"]);//prefered
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);//myKey1

// JsUser.email = "atul@chatgpt.com";
// Object.freeze(JsUser);//after freeze() no one can change the object 

// JsUser.email = "atul@microsoft.com";
// console.log(JsUser);


//adding a function into object

JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

// console.log(JsUser.greeting);//[Function (anonymous)]-> function reference returned back

console.log(JsUser.greeting());//Hello Js User.
console.log(JsUser.greetingTwo());//Hello js user, Atul