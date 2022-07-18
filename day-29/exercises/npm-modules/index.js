import wait from "waait";
import { faker } from "@faker-js/faker";
import { formatDistance, format } from "date-fns";
import axios from "axios";
import { intersection, isEqual } from "lodash";
import to from "await-to-js";

//* waait
async function go() {
  console.log("Going!");
  await wait(200);
  console.log("Ending!");
}

// go();

//* Faker.js
const fakeNames = Array.from({ length: 10 }, () => `${faker.name.firstName()} ${faker.name.lastName()}`);

console.log(fakeNames);

//* date-fns
const diff = formatDistance(new Date(1986, 3, 4, 11, 32, 0), new Date(1986, 3, 4, 10, 32, 0), {
  addSuffix: true,
}); // = > 'in about 1 hour'
console.log(diff);

const diff2 = formatDistance(new Date(), new Date(2020, 3, 4, 10, 32, 0), {
  addSuffix: true,
}); // = > 'in over 2 years'
console.log(diff2);

//? January the 12th 2020
const date = new Date();
const formatted = format(date, `LLLL 'the' do y`);
console.log(formatted);

//* Axios
async function getJoke() {
  const { data } = await axios.get("https://icanhazdadjoke.com", {
    headers: {
      // Accept: "application/json",
      Accept: "text/plain",
    },
  });
  console.log(data);
}

// getJoke();

//* Lodash
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [5, 3, 8, 3, 7, 453, 34];

const sameValues = intersection(a, b);
console.log(sameValues);

const person1 = { name: "wes" };
const person2 = { name: "wes" };

console.log(isEqual(person1, person2));

//* await-to-js
function checkIfNameIsCool(firstName) {
  return new Promise((resolve, reject) => {
    if (firstName === "Wes") {
      resolve("Cool name");
      return;
    }
    reject(new Error("Bad Name"));
  });
}

async function checkName() {
  // const [err, successValue] = await to(checkIfNameIsCool("Wes"));
  const [err, successValue] = await to(checkIfNameIsCool("snickers"));
  if (err) {
    // deal with it
    console.error(err);
  } else {
    console.log(successValue);
  }
}

checkName();

/*
  eslint
    no-unused-vars: "off",
    no-console: "off",
*/
