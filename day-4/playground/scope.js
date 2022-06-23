//* Global Variables
/* eslint-disable */
// const first = 'wes';
// let second = 'bos';
// var age = 100;

// console.log(first, second, age);
// console.log(window.first, window.second, window.age);
/* eslint-enable */

//* Function Scoping
// const age = 100;

// function go() {
//   const age = 200;
//   const hair = "blonde";

//   //? When we `console.log(age)`, is it going to be 100?
//   console.log(age);
//   //? When we `console.log('hair')`, will it be blonde?
//   console.log(hair);
// }

// //? When we `console.log(age)`, is it going to be 100?
// console.log(age);
// //? When we `console.log('hair')`, will it be blonde?
// console.log(hair);

//* Block Scoping
/* eslint-disable */
// let cool4;
// if (1 === 1) {
//   var cool1 = true;
//   let cool2 = true;
//   const cool3 = true;
//   cool4 = true;
// }

// console.log(cool1);
// console.log(cool2);
// console.log(cool3);
// console.log(cool4);

// function isCool(name) {
//   // if (name === "wes") {
//   //   var cool = true;
//   // }

//   //? this will effectively be the same as:
//   let cool;

//   if (name === 'wes') {
//     cool = true;
//   }

//   console.log(cool);
//   return cool;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
/* eslint-enable */

// const dog = "Snickers";

// function logDog() {
//   console.log(dog);
// }

// function go() {
//   const dog = "Sunny";
//   //? When we call the `logDog()` function, is it going to log Sunny or Snickers?
//   logDog();
// }

//* Lexical/Static Scoping

// const dog = "Snickers";

// function logDog(dog) {
//   console.log(dog);
// }

// function go() {
//   const dog = "Sunny";
//   //? When we call the `logDog()` function, is it going to log Sunny or Snickers?
//   logDog(dog);
// }

// go();

//* Closures - A preview
function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }

  yell();
}

sayHi("wes");
yell();

/*
eslint
  no-unused-vars: "off",
  no-console: "off",
  no-shadow: "off",
  no-undef: "off",
*/
