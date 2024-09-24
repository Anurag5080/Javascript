const name = "Anurag"
const repoCount = 50

// console.log(name + repoCount + " Value");//don't use that

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//always use this syntax instead of + syntax.

const gameName = new String('anurag-as-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   anurag    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anurag.com/anurag%20singh"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

//read more about all the methods of strings as it is important, they all are functions as well and importabt for further study of js.
