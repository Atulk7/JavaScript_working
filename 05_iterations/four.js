const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}


//iterate object via for in loop
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);//myObject[key] -> to find values
}

// ------------------------------------------------
const programming = ["js","ruby","java","swift","python"];

//iterate array using for in loop
for (const key in programming) {
    // console.log(key);//keys -: 0 1 2 3 4
    // console.log(programming[key]);//js ruby java swift python
}


// -----------------------------------------------------
const map = new Map();

map.set('IN', "India");
map.set('USA', "United state of America");
map.set('Fr', "France");
map.set('IN', "India");

//iterate map using for in loop
for (const key in map) {
//    console.log(key);//map is not iterable so nothing print 
}