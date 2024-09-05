//  Primitive (it assigns the copy of the value of a variable to another, so obviously on changing value of another variable first variable dosen't change)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)(it assigns the reference of actual original value to both variables so on changing one another also changes.)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "anurag",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

/*
Return type of variables in JavaScript

1) Primitive Datatypes

Number => number
String => string
Boolean => boolean
null => object
undefined => undefined
Symbol => symbol
BigInt => bigint

2) Non-primitive Datatypes

Arrays => object
Function => function object
Object => object
*/

// https://262.ecma-international.org/5.1/#sec-11.4.3