// Block scope , global scope , core scope.
// Scope in console is different from what we get scopein node through code editor.

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 40
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//-----------------------------------------------------Scope in Nested functions ( Closure )---------------------------------------------------------

function one(){
    const username = "Anurag"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

//----------------------------------------------------------Scope in Nested If-else---------------------------------------------------------------

if (true) {
    const username = "Anurag"
    if (username === "Anurag") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ interesting ( called Hoisting ) , Execution context ++++++++++++++++++++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}




const addTwo = function(num){
    return num + 2
}
addTwo(5)
