//Immediately Invoked Function Expressions (IIFE)

//NOte -> to avoid global scope polution we use iife function expression

(function chai(){
    console.log(`DB CONNECTED`);
})();//MUST SEMICOLLON

//iife with arrow
( () => {
    console.log(`DB CONNECTED TWO`);
} )()

// chai();//not need to call auto call function 