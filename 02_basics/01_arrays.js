//Array

// const mhHeros = ["shaktiman", "batman","heman","nagarajun"]

const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr2[1]);


// Array methods
const myArr = [0, 1, 2, 3, 4, 5];

// console.log(myArr.push(16));
// myArr.push(7);
// console.log("array after push \n" + myArr);
//push()=> add element end of array and return new array length.

// myArr.pop();
// console.log("array after pop \n" + myArr);
// console.log(myArr.pop());
//pop()=> delete element form end of array and return deleted element.


// myArr.unshift(9)
// console.log(myArr);
//unshift()=> add element at the 0th index(starting) and return the new length of arry

// myArr.shift();
// console.log(myArr);
//shift()=> delete element from front and return that element

// console.log(myArr.includes(20));
// console.log(myArr.indexOf(1));


// const newArr = myArr.join();//old array  convert into string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);//object
// console.log(typeof newArr);//string

//slice(), splice()

console.log("A", myArr);//A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3);//take elements from starting specified index to specified last index(exclude)

console.log(myn1);//[ 1, 2 ]
console.log("B", myArr);//B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3);//delete element from specied index -1 to specified index -3(include).
console.log("C", myArr);//C [ 0, 4, 5 ]
console.log(myn2);//[ 1, 2, 3 ]
// console.log(myn1);


