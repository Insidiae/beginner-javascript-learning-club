console.groupCollapsed("The `new` keyword");

const myDate = new Date("August 11, 2025");
console.dir(myDate);
console.log(myDate.getFullYear());

// eslint-disable-next-line
const names = new Array("wes", "kait");
// eslint-disable-next-line
const wes = new Object({ name: "wes" });

console.log(names);
console.log(wes);

const span = document.createElement("span");

console.log(span instanceof HTMLSpanElement);
console.log(span instanceof Node);

// function Pizza() {
//   console.log('Making a pizza');
// }

// // const pepperoniPizza = Pizza();
// const pepperoniPizza = new Pizza();
// console.log(pepperoniPizza);
// console.log(pepperoniPizza.constructor);
// console.log(pepperoniPizza instanceof Pizza);

console.groupEnd();

console.groupCollapsed("The `this` keyword");

const button1 = document.querySelector(".one");
const button2 = document.querySelector(".two");

function tellMeAboutTheButton() {
  console.log("outside", this);
  setTimeout(() => {
    console.log("inside", this);
    this.textContent = "You Clicked Me";
  }, 1000);
}

button1.addEventListener("click", tellMeAboutTheButton);
button2.addEventListener("click", tellMeAboutTheButton);

function Pizza(customer, toppings = []) {
  console.log("Making a pizza");
  // save the toppings that were passed in, to this instance of pizza
  this.toppings = toppings;
  this.customer = customer;
  this.id = Math.floor(Math.random() * 16777215).toString(16);
  this.slices = 10;
}

const pepperoniPizza = new Pizza("Wes Bos", ["pepperoni"]);
const canadianPizza = new Pizza("Kait Bos", ["pepperoni", "mushrooms", "onion"]);

console.log(pepperoniPizza);
console.log(canadianPizza);

console.groupEnd();

/*
  eslint
    no-unused-vars: "off",
    no-console: "off",
    no-extend-native: "off",
*/
