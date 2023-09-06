//Immediately Invoked Function Expressions (IIFE)

//NOte -> to avoid global scope polution we use iife function expression

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();//MUST SEMICOLLON :- so that iife function knowing when to stop 

// //iife with arrow
// ( () => {
    // unnamed iife
//     console.log(`DB CONNECTED TWO`);
// } )()

// chai();//not need to call auto call function. 



//when we want to take parameter into iife function and look how to pass argument into a iife function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('atul-kevat')
