// Immediately Invoked Function Expressions (IIFE)
// Basically we use iife for two problems -
// Problem 1 :- We want to execute function immediately after defining that function generally for database connection.
// Problem 2 :- For protecting the function from the pollution of global variables.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // Here semi-colon is mandatory for writing two iife functions.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
