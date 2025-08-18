"use strict"  // treat all code as newer version - > Typescript

// alert( 3 + 3) // we are using nodejs, not browser

// console.log(3 
//     +
//      3) // code readability should be high

// console.log("Ranjeeta")


// let name = "Ranjeeta"
// let age = 18
// // let isLoggedIn = false
// let state;

// // number => 2 to power 53
// // bigint
// // string => ""
// // boolean => true/false
// // null => standalone value (User Assigned value)
// // undefined => 
// // symbol => unique (mostly used in React and Figma to give symbols to components)


// // object

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object
// // =============================================================

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false -> because

// const bigNumber = 3456543576654356754n
// for primitive types the reference variables are created in Stack Memory and when we assign a primitive value to another variable => then it creates a new 


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}