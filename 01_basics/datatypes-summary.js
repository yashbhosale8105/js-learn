// Primitive data types in JavaScript

//types - String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100 // Number
const scoreValue = '100' // String

const isLoggedIn = false // Boolean
const outsideTemp = null // Null
let userEmail; // Undefined


const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2) // false

//const bigNumber = 53255352535567899645n

//Reference data types - Objects

//Arrays, Objects, Functions

const heros = ['Shaktiman', 'Naagraj', 'Doga'] // Array declaration
let myObj = {
    name: 'Yash',
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof myFunction) // function
/*
baki sabka typeof same atay 
only for null => object remember this
*/