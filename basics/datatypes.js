"use strict"; // treat all JS code as newer version or nodejs mostly automatically aplly that.

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Anurag");


let name = "Anurag";
let age = 21;
let isLoggedIn = false
let state;

console.log( typeof "Anurag" )
console.log( typeof 21 )
console.log( typeof "name" )
console.log( typeof age )
console.log( typeof isLoggedIn )
console.log( typeof state )


//PRIMITIVE DATATPES:-

// number datatype => range is of 2 to power 53.
// bigint => mostly we dosen't have to use it until we're working on a very big number game projects.
// string => ""
// boolean => true/false
// null => standalone value but it's datatype returns as object which is non-primitive datatype of js.
// undefined => it's datatype is undefined.
// symbol => unique

//NON-PRIMITIVE DATATYPES:-

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object ,one of the contradictory things of js. 