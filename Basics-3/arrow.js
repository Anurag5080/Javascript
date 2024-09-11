
// In the object "this" keyword is used for refring current context.So that further if anyone use this object and changes the value then it changes according to it. But if you console.log(this) then it returns the current context of the global object there.

//---------------------------------------------"this" keyword in object------------------------------------------------------------------------

const user = {
    username: "Anurag",
    price: 999,

    welcomeMessage: function() {             // Here we defining a Method.
        console.log(`${this.username} , welcome to website`);
        console.log(this);                   // Here it returns the current context of it's global object which is object user here, as wriitten above.
    }

}

// user.welcomeMessage()
// user.username = "sam"                     // Here we changes the context simply a value.
// user.welcomeMessage()                     // So in this we got the username Sam that's what i'm talking above. 

// console.log(this);                        // here this keyword returns the empty object because here we are in our node environment and in node environment there's no global object but in browser if we run this command we get window because there global object is our window that's why we are able to do DOM manipulation there.

//--------------------------------------------------"this" keyword in function-----------------------------------------------------------

// function chai(){
//     console.log(this);
// }
// chai() 
  
//------- On executing above function we got many different types of values. 

// function chai(){
//     let username = "Anurag"
//     console.log(this.username);
// }

// chai()

//---------------on executing above function we got undefined. So in fumctiom we can't run this method like in objects we do.

//+++++++++++++++++++++++++++++++++++++++++Just a different method of defining functions in js+++++++++++++++++++++++++++++++++++++++++

// const chai = function () {
//     let username = "Anurag"
//     console.log(this.username);
// }

// chai()

//---------------Also on executing above function we got undefined. So in fumctiom we can't run this method like in objects we do.

//+++++++++++++++++++++++++++++++++++++++++++ Arrow Function syntax +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const chai =  () => {
    let username = "Anurag"
    console.log(this.username); // Here also it gives undefind. 
    console.log(this);          // But suprisingly here it returns the empty object just like we're getting in nide environment and in simple functions for same command we're getting many different types of values.
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2      //  In this we dosen't use keyword "return" called Implicit return. (use in single line)

// const addTwo = (num1, num2) => ( num1 + num2 )  // In this also we dosen't use keyword "return" called Implicit return. (use in single line)
 
const addTwo = (num1, num2) => ({username: "Anurag"})  // That's how we return object through functions without using return keyword. 


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach( function () {} or () => {} or () => () )  // Here we use different suntax's of arrow function.