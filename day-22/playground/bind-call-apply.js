console.groupCollapsed("`bind`");

const person = {
  name: "Wes Bos",
  sayHi() {
    console.log("this =", this);
    console.log(`hey ${this.name}`);
    return `hey ${this.name}`;
  },
};

const jenna = { name: "Jenna" };

const sayHi = person.sayHi.bind({ name: "Harry" });

console.log(person.sayHi());
console.log(person.sayHi.bind(jenna)());
console.log(sayHi());

//* QuerySelector Example
//? by calling bind against querySelector,
//? we say when the `$` function is run, use `document` as the `this` value.
const $ = document.querySelector.bind(document);
const lookFor = document.querySelectorAll.bind(document);

const wrapper = document.querySelector(".wrapper");
const p = wrapper.querySelector("p");
console.log(p);
console.log($("p"));
console.log(lookFor("p"));

const bill = {
  total: 1000,
  calculate(taxRate) {
    console.log("this =", this);
    return this.total + this.total * taxRate;
  },
  describe(mealType, drinkType, taxRate) {
    console.log(`Your meal of ${mealType} with a drink of ${drinkType} was ${this.calculate(taxRate)}`);
  },
};

const total = bill.calculate(0.13);
const calc = bill.calculate.bind({ total: 500 }, 0.06);

console.groupEnd();

console.groupCollapsed("`call` and `apply`");

console.log(calc());
const total2 = bill.calculate.call({ total: 500 }, 0.06);
console.log(total2);

const total3 = bill.calculate.apply({ total: 325 }, [0.6]);
console.log(total3);

const myMeal = bill.describe.call(bill, "pizza", "beer", 0.13);
console.log(myMeal);
const myMeal2 = bill.describe.apply(bill, ["pizza", "beer", 0.13]);
console.log(myMeal2);

console.groupEnd();

/*
  eslint
    no-unused-vars: "off",
    no-console: "off",
*/
