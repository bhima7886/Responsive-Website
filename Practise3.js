// Question 62:
// You have an array of numbers. Write a function to find and return the sum of all even numbers in the array.
let array=[10,20,40,80,45,45];
const sum=0;
const sumfunction=array.reduce((sum,ele)=>
{
    return sum=sum+ele;
})
console.log("sum of arrayelements",sumfunction);


// Question 63:
// Given an array of strings, implement a function to find and return the longest string in the array.
const arraystring = ["this", "is", "the", "javascript"];
const longestString = (array) => {
    // Use reduce to find the string with the maximum length
    return array.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
console.log("Longest String:", longestString(arraystring));

// Question 64:
// Create an object representing a car with properties like 'model', 'year', and 'color'.
// Write a function to display information about the car.
const car={
    model:"Tata",
    year:2011,
    color:"black"
}
function carInformation(car)
{
    return car;
}
console.log("Display information about car=",carInformation(car));

// Question 65:
// Write a function that takes two arrays and returns a new array containing common elements from both arrays.
const a=[10,20,30,40,50];
const b=[40,50,100,200,45];
let commanarr=[];
function commanElements(a,b)
{
  for (let i=0;i<a.length-1;i++)
  {
    for (let j=1;j<b.length-1;j++)
    {
       const d=(a[i]==a[j]);
       commanarr.push(d);
    }
  }
  return commanarr;
}
console.log(commanElements(a,b));

// Question 66:
// You are given an array of objects representing students. Each student has a name and an array of grades.
// Write a function to calculate and return the average grade for each student.


// function averageGradeEachStudent(students) {
//     // Use map to calculate the average for each student
//     return students.map(student => {
//         const average = student.grade.reduce((acc, grade) => acc + grade, 0) / student.grade.length;
//         return { name: student.name, average: average };
//     });
// }

let students=[
    {
      name:"sagar",
      grade:[10,20,30]
    },
    {
      name:"pravin",
      grade:[40,20,24]
    },
    {
        name:"anil",
        grade:[43,23,22]
    }

]
function averageGradeEachStudent(students){
     return students.map((student)=>
     {
        const average=student.grade.reduce((acc,grade)=> acc+grade)/student.grade.length;
        return {name:student.name,average:average};
     })
}
console.log(averageGradeEachStudent(students));
// Question 67:
// Implement a function to remove duplicates from an array and return a new array with unique elements.
let duplicateele=[10,20,70,40,10,20,588,78];
let uniquearr="";
function uniqueElements(duplicateele)
{
  return  uniquearr= new Set(...duplicateele)
}
console.log("Unique elements=",uniqueElements(duplicateele));

// Question 68:uniqueElements(duplicateele)
// Create an object representing a person with properties like 'name', 'age', and 'gender'.
// Write a function to check if a person is eligible to vote (age >= 18).
const person=[
    {
        name:"ajay",
        age:23,
        gender:"Male"
    },
    {
        name:"Sunil",
        age:24,
        gender:"male"
    },
    {
        name:"aryan",
        age:17,
        gender:"male"
    }
]
function checkAge(person)
{
    console.log(person.age);
    if(person.age > 18)
    {
        return "eleigble";
    }
    else{
        return "not eligible";
    }
}
console.log(checkAge(person));

// Question 69:
// Given an array of numbers, write a function to find and return the second smallest number.

// Question 70:
// You have an array of objects representing products. Each product has a name and a price.
// Write a function to calculate and return the total price of all products in the array.

// Question 71:
// Implement a function to flatten a nested array and return a single-level array.
