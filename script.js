//function
// function logger(name) {
//     let result = `Hello ${name}`;
//     return result;
// }

// logger("Mendy");

// const logger = (name) => {
//     return `Hello ${name}`;
// }
// let res = logger("Duc");
// console.log(res);

//OBJ
// let person = {
//     firstName: "D",
//     lastName: "Nguyen",
//     age: 17,
// }

// let fisrt = person.firstName;
// let last = person.lastName;
//Destructuring
// const { firstName: newName, lastName, age } = person;
// console.log(newName, lastName, age)

// let fullName = "D Nguyen";
// let age = 20;

// let person = {
//     fullName,
//     age,
// }

// console.log(person)

//array
// let num = [1, 2, 3, 4, 5];
// let length = num.length;

// // let str = ["a", "b", "c", "d", "e"];
// console.log(num[2]);
// console.log(num[length - 1]);

//module: import / export / export default

import PI, { sum as newSum, sub, multi } from "./math.js";
console.log("sum", newSum(1,2))
console.log("sub", sub(1,2))
console.log("multi", multi(1,2))
console.log(PI)

