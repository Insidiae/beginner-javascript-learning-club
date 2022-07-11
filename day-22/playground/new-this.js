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
  this.size = "Medium";

  // this.eat = function () {
  //   if (this.slices > 0) {
  //     this.slices = this.slices - 1;
  //     console.log(`CHOMP! you now have ${this.slices} left!`);
  //   } else {
  //     console.log(`Sorry! No slices left!`);
  //   }
  // }
}

Pizza.prototype.eat = function () {
  if (this.slices > 0) {
    this.slices -= 1;
    console.log(`CHOMP! you now have ${this.slices} left!`);
  } else {
    console.log(`Sorry! No slices left!`);
  }
};

Pizza.prototype.describe = function () {
  return `This pizza is for ${this.customer} with the toppings ${this.toppings.join(",")} and there are ${
    this.slices
  } slices left!`;
};

Pizza.prototype.size = "Large";

const pepperoniPizza = new Pizza("Wes Bos", ["pepperoni"]);
const canadianPizza = new Pizza("Kait Bos", ["pepperoni", "mushrooms", "onion"]);

console.log(pepperoniPizza);
console.log(canadianPizza);

console.log(pepperoniPizza.eat === canadianPizza.eat);

String.prototype.toSarcastic = function () {
  //? mAkE StRiNg sArCaStIc
  // const sarcastic = this.split('').map((char, i) => {
  //   if (i % 2) {
  //     return char.toUpperCase();
  //   } else {
  //     return char.toLowerCase();
  //   }
  // }).join('');
  // return sarcastic;
  return [...this].map((char, i) => char[`to${i % 2 ? "Upper" : "Lower"}Case`]()).join("");
};

console.groupEnd();

/*
  eslint
    no-unused-vars: "off",
    no-console: "off",
    no-extend-native: "off",
*/
