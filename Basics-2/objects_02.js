//Creating objects through constructor.

// const tinderUser = new Object()  // Creates singleton object.
const tinderUser = {}               // Creates non-singleton object.

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {               // Nested object creation.
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "anurag",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // using dot operator we can acsses them in depth.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }   // Creates an inside an object. 
// const obj3 = Object.assign({}, obj1, obj2, obj4)   // pushes all the obj1, obj2 and obj4 inside the new object created name obj3 that's why we declare an empty object in the syntax.

const obj3 = {...obj1, ...obj2}    // Use this spread operator to merge the values of all objects inside a single object.
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));    // Returns an array of the all values and further you can apply all methods of array on them.
// console.log(Object.values(tinderUser));    // Returns an array of the all values and further you can apply all methods of array on them.
// console.log(Object.entries(tinderUser));    // Returns an array of the all values and further you can apply all methods of array on them.

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //to check the property of the object.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "anurag"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "anurag",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
