/*
function calculateBill(billAmount, taxRate) {
  const total = billAmount * (1 + taxRate);
  return total;
}

// const myTotal = calculateBill(100, 0.15);
const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotal = calculateBill(wesTotal, wesTaxRate);
const myTotal2 = calculateBill(200, 0.13);
console.log(myTotal, myTotal2);

console.log(`Your total is $${myTotal}`);
*/

// const firstName = "wes";
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

/*
const greeting = sayHiTo("Wes");
console.log(greeting);
*/

/*
const kait = 100;
const myTotal3 = calculateBill(kait + 50, 0.15);
console.log(myTotal3);
*/

function doctorize(name = "who") {
  return `Dr. ${name}`;
}

function yell(name = "Silly Goose") {
  return `HEY ${name.toUpperCase()}`;
}

// console.log(yell(doctorize()));

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

const myTotal4 = calculateBill(100, undefined, 0.2);
console.log(myTotal4);

/*
eslint
  no-unused-vars: "off",
  no-console: "off"
*/
