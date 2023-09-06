//Arrays specific loops
// 1- for of

// ["","",""];
// [{},{},{}];

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greeting = "Hello World";

for (const greet of greeting) {
  // console.log(`Each char is ${greet}`);
}

//---------------------Maps -> data type-----------------
const map = new Map();

map.set('IN', "India");
map.set('USA', "United state of America");
map.set('Fr', "France");
map.set('IN', "India");


// console.log(map);

//iterate map with for of loop 
for (const [key,value] of map) {
    // console.log(key, ':-',value);
    // console.log(key);//IN USA Fr
}


// ----------------------------------------------
const myObject = {
    'game1': 'NFS',
    'game2': 'GTA',
    'game3': 'Spider-Man'
}

//iterate object using for of loop
// for (const [key,value] of myObject) {
//     console.log(key, ':-',value);//Note - we can't iterate object via for of loop
// }