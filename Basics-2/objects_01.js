// Defining object through constructor.
// In only constructor method of defining object gives us singleton object.
// syntax :- Object.create

// Defining object through literals.

const mySym = Symbol("key1") // Declaration of a symbol.


const JsUser = {
    name: "anurag",
    "full name": "anurag Singh",
    [mySym]: "mykey1", // Using symbol as a key. important for interviews.
    age: 18,
    location: "Ayodhya",
    email: "anurag@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) 1st method of accessing a object's element.
// console.log(JsUser["email"]) 2nd method of accessing a object's element.
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) method of accessing an object's symbol which is a key.

JsUser.email = "anurag@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "anurag@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //string interpretation.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());