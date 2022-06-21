//* Part 1 - Strings
/* 
//* Different flavors of strings
// eslint-disable-next-line
const name = 'wes';
const middle = "topher";
const last = `bos`;

//* Escaping characters
// const sentence = "she's so \"cool\""
const sentence = `she's so "cool"`;
const sentence2 = `she\`s's so "cool"`;

//* Multi-line strings
// const song = "Ohhh\
// \
// ya\
// \
// I like\
// \
// pizza";

//? you can use backticks instead!
const song = `Ohhh

ya

I like

pizza`;

const html = `
  <div>
    <h2></h2>
  </div>
`;

//* String Interpolation
// const hello = "hello my name is" + name + ". Nice to meet you.";
// let hello2 = "hello my name is ";
// hello2 = hello2 + name;
// hello2 = hello2 + " Nice to meet you";

const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;

const html2 = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html2;
*/

//* Part 2 - Numbers
/*
const age = 100;
const name = "wes";

const a = 20;
const b = 10;

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kid gets ${eachKidGets}, dad gets ${dadGets}`);

//! don't do this:
// const price = 10.34;
//? store using cents instead:
const price = 1034;
*/

//* Part 3 - Objects
/*
const person = {
  first: "wes",
  last: "bos",
  age: 100,
};
*/

//* Part 4 - Null and Undefined
/*
let dog;
console.log(dog);
dog = "snickers";

let somethingUndefined;
const somethingNull = null;

const cher = {
  first: "Cher",
};
const teller = {
  first: "Raymond",
  last: "Teller",
};

teller.first = "Teller";
teller.last = null;
*/

//* Part 5 - Booleans and Equality
const isDrawing = false;

let age = 18;
const ofAge = age > 19;
console.log(ofAge);

age = 100;
const age2 = 100;

/*
eslint
  no-unused-vars: "off",
  no-console: "off"
*/
