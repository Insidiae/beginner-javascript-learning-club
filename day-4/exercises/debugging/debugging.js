const people = [
  { name: "Wes", cool: true, country: "Canada" },
  { name: "Scott", cool: true, country: "Merica" },
  { name: "Snickers", cool: false, country: "Dog Country" },
];

//* Console Methods
people.forEach((person, index) => {
  console.log(person.name);
});

console.table(people);

function doALotOfStuff() {
  console.group("Doing some stuff");
  console.log("Hey Im one");
  console.warn("watch out!");
  console.error("hey");
  console.groupEnd("Doing some stuff");
}

function doctorize(name) {
  console.count(`running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

//* Callstack
function greet(name) {
  //! Uncomment the next line to see the error stack trace:
  // doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet("Wes"));
  console.log(name);
}

//* Grabbing Elements
const button = document.querySelector(".bigger");
button.addEventListener("click", (e) => {
  const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

//* Breakpoints
//! Uncomment the ff. to see the breakpoint:
/*
people.forEach((person, index) => {
  debugger;
  console.log(person.name);
});
*/

//* Some Setup Code
function bootstrap() {
  console.log("starting the app!");
  go();
}

// bootstrap();

//* Network Requests
// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "text/plain",
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}

//? Check the network tab in your browser devtools
fetchDadJoke();

/*
eslint
  no-unused-vars: "off",
  no-console: "off"
*/
