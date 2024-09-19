const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})  // It basically performs operations on all elements of the array unlike filter where we only do condition check on all elements of array.

const newNums = myNumers   // This method is called chaining in javascript and it's very useful.
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);