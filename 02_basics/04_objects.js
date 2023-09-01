// const tindeUser = new Object(); //singleton object
const tinderUser = {}; //non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "sunny";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "atul@gmail.com",
  fullname: {
    userfullname: {
      firstname: "atul",
      lastname: "kevat",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

//combine or megre more then one objects
// const obj3 = {obj1 ,obj2};
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj4 = Object.assign({},obj1,obj2);
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//merging using spread operator
const obj5 = { ...obj1, ...obj2 };
// console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//when data comes from db
const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "d@gmail.com",
  },
];

// console.log(users[1].email);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(tinderUser);
//{ id: '123abc', name: 'sunny', isLoggedIn: false }

//some specific method on object
// console.log(Object.keys(tinderUser));
//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));
//[ '123abc', 'sunny', false ]
// console.log(Object.values(tinderUser).length);//3

// console.log(Object.entries(tinderUser));
//[ [ 'id', '123abc' ], [ 'name', 'sunny' ], [ 'isLoggedIn', false ] ]



// console.log(tinderUser.hasOwnProperty('id'));//check object have perticular property or not 



// +++++++++++++++++++++++++++++++++++++++++++++++++++++
//destructuring of object 

const course = {
    coursename: "js in hindi",
    price: 3000,
    courseInstructor: "Hitesh Choudhary"
}

//couse.courseInstructor

const {courseInstructor} = course;
console.log(courseInstructor);//Hitesh Choudhary

const {courseInstructor: instructor} = course;
console.log(instructor);//Hitesh Choudhary


//+++++++++++++++++++++++++++++++++++++++++++++++++++
//api's

//json object 
// {
//     "name": "Atul",
//     "coursename": "sb-developer",
//     "price": "free"
// }

[
    {},
    {},
    {}
]