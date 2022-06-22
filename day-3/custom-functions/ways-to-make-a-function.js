//* Function Declaration
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

//* Function Expression
//! Function expressions are NOT hoisted!
//! That means we can't call the function before it's declared:
// doctorize("wes");
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

//* Arrow Function
//? Without implicit return:
// const inchToCM = (inches) => {
//   return inches * 2.54;
// };

//? With implicit return:
const inchToCM = (inches) => inches * 2.54;

// Implicit return also works with multiple parameters:
const add = (a, b = 3) => a + b;

//* Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("Running the Anon function");
  return `You are cool`;
})();

//* Methods
const wes = {
  name: "Wes Bos",
  sayHi: function sayHi() {
    console.log(this);
    console.log("Hey Wes!");
    return "Hey Wes!";
  },
  // Shorthand Method
  yellHi() {
    console.log("HEY WESSSSS");
  },
  // Arrow function
  whisperHi: () => {
    console.log("hiii wess im a mouse");
  },
};

//* Callback Functions
const button = document.querySelector(".clickMe");

function handleClick() {
  console.log("Great clicking!!");
}
button.addEventListener("click", handleClick);

//* Timers
setTimeout(wes.yellHi, 1000);

setTimeout(() => {
  console.log("DONE TIME TO EAT");
}, 2000);

/*
eslint
  no-unused-vars: "off",
  no-console: "off"
*/
