// Array

// JavaScript array-copy operations create shallow copies( A shallow copy of an object is a copy whose properties share the same references // A deep copy of an object is a copy whose properties do not share the same references).
// JavaScript arrays are resizable and can contain a mix of different data types.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["ironman", "thor"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // it changes array to an string.

// console.log(myArr);
// console.log( newArr);


// slice, splice // and difference between slice and spice.

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //It removes that part of the array permanently and the rest of elements becomes that array. 
console.log("C ", myArr);
console.log(myn2);