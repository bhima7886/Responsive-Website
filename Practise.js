// Question 1: Create a function to calculate the sum of two numbers.
function calculateSum(a, b) {
   console.log("sum",a+b);
}
calculateSum(10,20);


// Question 2: Explain the difference between "let", "const", and "var" in variable declaration.
// Your explanation here

// Question 3: Write a function to find the maximum number in an array.

function findMaxNumber(arr) {
    const maxNum=Math.max(...arr);
    return maxNum;
}
var arr=[10,20,30,40,50];
console.log(findMaxNumber(arr));



// Question 4: What is the purpose of the "this" keyword in JavaScript?
// Your explanation here

// Question 5: Create an object with three properties and a method.
const sampleObject = {
    firstname:"john",
    lastname:"doe",
    city:"mumbai"
};
console.log(sampleObject);

// Question 6: Explain the concept of event delegation in JavaScript.
// Your explanation here

// Question 7: Write a loop to print numbers from 1 to 10.
// Your code here
for(let i=0;i<=10;i++)
{
    console.log(i);
}



// Question 8: What is the difference between "==" and "===" in JavaScript?
// Your explanation here
//"==" is this compares only values of two variables 
//for example 
let a=10;let b="10";
if(a==b) // return true

if(a===b)// return false;



// Question 9: Implement a callback function to multiply two numbers.
function multiplyNumbers(a, b, callback) {
 
    console.log("Multiply=",a*b);
    callback();
}
const sum=((m,n)=>
{
    console.log(m*n)
})

multiplyNumbers(100,20,sum(40,20));

// Question 10: What is the purpose of the "use strict" directive in JavaScript?
// Your explanation here


// Question 11: What is closure in JavaScript? Provide an example.
/*
Explanation:
Closure is a feature in JavaScript where a function retains access to the variables from its outer (enclosing) scope even after the outer function has finished execution. This allows the inner function to access and manipulate variables from the outer function.

*/
function outer(a)
{
 
    function inner(b)
    {
       console.log("a="+a);
       console.log("b",b);
    }
    inner(200);
}
outer(100);

// Question 12: Explain the concepts of "hoisting" in JavaScript.
/*
Explanation:
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or function before it is declared in your code.

*/
console.log("Before c=",c);
var c=10;
console.log("After c=",c);

// Question 13: Write a function to check if a given string is a palindrome.
/*
Explanation:
A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward.

*/

 const d="madam";
const  e="madam"
const f=d.split("");
const g=f.reverse();
console.log("f",f);
console.log("g",g);

// Question 14: What is the difference between "null" and "undefined" in JavaScript?
/*
Explanation:
In JavaScript, both "null" and "undefined" represent the absence of a value, but they are used in different contexts.

*/

// Question 15: Create an array and demonstrate the use of forEach loop to iterate through its elements.
/*
Explanation:
The forEach loop is a method in JavaScript that allows you to execute a provided function once for each array element.

*/

const array=[10,20,30,40,50];
array.forEach((10)=>
{
return 10*array;
})

console.log(array);
// Question 16: What is the difference between "slice" and "splice" in JavaScript?
/*
Explanation:
Both "slice" and "splice" are array methods in JavaScript, but they have different purposes and behaviors.

*/

// Question 17: Explain the concept of Promises in JavaScript.
/*
Explanation:
Promises are a way to handle asynchronous operations in JavaScript. They represent a value that might be available now, in the future, or never.

*/

// Question 18: Write a function to remove duplicates from an array.
/*
Explanation:
Duplicate elements in an array are those that appear more than once. The goal is to have a unique set of elements in the array.

*/

// Question 19: How does the "async/await" syntax work in JavaScript?
/*
Explanation:
The "async/await" syntax is a feature introduced in ECMAScript 2017 (ES8) to simplify working with asynchronous code, specifically with Promises.

*/

// Question 20: Explain the purpose of the "try/catch" statement in JavaScript.
/*
Explanation:
The "try/catch" statement is used in JavaScript for error handling. Code inside the "try" block is executed, and if an exception occurs, it is caught and handled in the "catch" block.

*/


// Question 31: What is the difference between "map" and "filter" array methods in JavaScript?

//map
let records=[10,20,50,60,40];

const mapexample=records.map((ele)=>
{
    return ele*10;
})
console.log("mapexample=",mapexample);
let records1=[10,20,50,60,40];
const filterexample=records1.filter((ele)=>
{
    return ele >=40;
})
console.log("filterexample",filterexample);

// Question 32: How do you use the "reduce" method to perform operations on an array?
//we want to use basically find the sum of array then we use reduce method;
let records3=[1,2,3,4,5];
const reduceexample=records3.reduce((sum,ele)=>
{
    return sum=sum+ele;
})
console.log("reduceexample",reduceexample);

// Question 33: Explain the purpose of the "find" and "findIndex" array methods in JavaScript.
//Find method is check the number is present that in array;
//findIndex check that number is present that in array index.
let records4=[10,20,30,40,50];


console.log("FindIndex example",records4.findIndex(checkage));
console.log("Find example",records4.find(checkage));

console.log("indexOf Example",records4.indexOf(checkage));
console.log("lastIndexOf example",records4.lastIndexOf(checkage));

function checkage(age)
{
    return age >20;
}



// Question 34: What is the difference between "indexOf" and "lastIndexOf" methods in JavaScript arrays?



// Question 35: How can you add elements to the end of an array in JavaScript?
const records5=[10,20,30];
console.log("End of push elements in javascript example",records5.push(40));

// Question 36: Describe the use of the "concat" method in JavaScript arrays.
const records6=[10,20];
const records7=[30,35];
console.log("Concat Example",records6.concat(records7));

// Question 37: What is the purpose of the "splice" method in JavaScript arrays?
const records8=[50,86,79,66,33,23,55];

console.log("splice examples",records8.splice(0,100,10000));
// Question 38: How does the "slice" method work in JavaScript arrays?

// Question 39: Explain the concept of array destructuring in JavaScript.
const records9=[10,88,509,49,49];
var mn= [x,y,z,m,n]=records9;
console.log(mn);


// Question 40: How can you check if an element is present in an array using JavaScript?

// Feel free to explore and experiment with these array-related questions in your VS Code environment. If you have any doubts or need clarification on any specific topic, don't hesitate to ask!
