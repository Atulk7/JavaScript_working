//for each loop
const coding = ["js","java","ruby","python","swift","cpp"];

coding.forEach(  function (item){
    // console.log(item);
})

coding.forEach(item => {
    // console.log(item);
});

function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe);//provide a function reference

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
})

// ----------------******************--------------

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

//iterating array - array item are objects
myCoding.forEach( (item) => {
    console.log(item.languageName);//here item refering Object which is stored into a perticular index of an array
})