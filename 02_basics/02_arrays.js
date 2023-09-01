
const marvel_heroes = ["Thor","iron-man","spider-man"];
const dc_heroes = ["superman","flash","batman"];

// marvel_heroes.push(dc_heroes);//[ 'Thor', 'iron-man', 'spider-man', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes);//
// console.log(marvel_heroes[3]);//[ 'superman', 'flash', 'batman' ]

// console.log(marvel_heroes[3][0]);//superman

// const allHeroes = marvel_heroes.concat(dc_heroes);//it returns new array with both array elements
// console.log(allHeroes);


//this is the best way to merge more then one array.
const allNewHeroes = [...marvel_heroes,...dc_heroes];
console.log(allNewHeroes);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);




console.log(Array.isArray("Hitesh"));//false
console.log(Array.from("Hitesh"));//[ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name: "Hitesh"}));//interesting 

//multiple variables convert into array
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));