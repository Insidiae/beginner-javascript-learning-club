const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

const name = "Wes Bos👪🏻🎅🏻👩‍👩‍👧‍👦";

const wes = {
  name: "wes",
  age: 100,
  cool: true,
};

//* For
console.groupCollapsed("For");

for (let i = 100; i <= 120; i += 2) {
  console.log(i);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.groupEnd();

//* For of
console.groupCollapsed("For of");

for (const letter of name) {
  console.log(letter);
}

for (const number of numbers) {
  console.log(number);
}

console.groupEnd();

//* For in - used for looping over keys of an object
console.groupCollapsed("For in");

for (const prop in wes) {
  console.log(prop);
}

const baseHumanStats = {
  feet: 2,
  arms: 2,
  eyes: 2,
  head: 1,
};

function Human(baseName) {
  this.name = baseName;
}

Human.prototype = baseHumanStats;

const wes2 = new Human("wes");

console.log(Object.entries(wes2));

for (const prop in wes2) {
  console.log(prop);
}

console.groupEnd();

//* While Loop
console.groupCollapsed("While Loop");

let cool = true;
let coolCounter = 1;
while (cool === true) {
  console.log("You are cool");
  coolCounter++;
  if (coolCounter > 100) {
    cool = false;
  }
}

console.groupEnd();

/*
  eslint
    no-unused-vars: "off",
    no-console: "off",
    no-plusplus: "off",
    no-restricted-syntax: "off",
    guard-for-in: "off",
*/
