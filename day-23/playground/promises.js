// //* Promises
// function makePizza(toppings = []) {
//   // For every single topping that is added to the pizza,
//   // let's add 200 milliseconds to the initial bake time which is 500
//   const amountOfTimeToBake = 500 + toppings.length * 200;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(", ")}`);
//     }, amountOfTimeToBake);

//     // If something went wrong, we can reject this promise
//   });
// }

// const pepperoniPromise = makePizza(["pepperoni"]);
// const canadianPromise = makePizza(["pepperoni", "mushroom", "onions"]);

// console.log(pepperoniPromise, canadianPromise);

// //* `.then()` method
// console.log("Starting");

// pepperoniPromise.then((pizza) => {
//   console.log("Ahh I got it!");
//   console.log(pizza);
// });

// console.log("Finishing");

// //* Chaining multiple promises together
// console.log("First");

// makePizza(["pepperoni", "ham"])
//   .then((pizza) => {
//     console.log(pizza);
//     return makePizza(["ham", "cheese"]);
//   })
//   .then((pizza) => {
//     console.log(pizza);
//     return makePizza(["hot peppers", "onion", "feta"]);
//   })
//   .then((pizza) => {
//     console.log(pizza);
//     return makePizza();
//   })
//   .then((pizza) => {
//     console.log(pizza);
//     return makePizza(["one", "two", "three", "four", "one", "two", "three", "four", "one", "two", "three", "four"]);
//   })
//   .then((pizza) => {
//     console.log("All done! Here is your last pizza!");
//     console.log(pizza);
//   });

// console.log("Right after");

// //* `Promise.all()`
// const pizzaPromise1 = makePizza(["hot peppers", "onion", "feta"]);
// // eslint-disable-next-line
// const pizzaPromise2 = makePizza(["one", "two", "three", "four", "one", "two", "three", "four", "one", "two", "three", "four"]);
// const pizzaPromise3 = makePizza(["ham", "cheese"]);

// const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);
// dinnerPromise.then(([hottie, garbagePail, hamAndCheese]) => {
//   console.log(hottie, garbagePail, hamAndCheese);
// });

// //* `Promise.race()`
// const firstPizzaPromise = Promise.race([pizzaPromise1, pizzaPromise2, pizzaPromise3]);
// firstPizzaPromise.then((pizza) => {
//   console.log("You must be hungry, here is the first one ready");
//   console.log(pizza);
// });

//* Promises - Error Handling
function makePizza(toppings = []) {
  // For every single topping that is added to the pizza,
  // let's add 200 milliseconds to the initial bake time which is 500
  const amountOfTimeToBake = 500 + toppings.length * 200;

  return new Promise((resolve, reject) => {
    // If something went wrong, we can reject this promise
    if (toppings.includes("pineapple")) {
      reject("Seriously? Get out 🍍");
    }

    setTimeout(() => {
      resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(", ")}`);
    }, amountOfTimeToBake);
  });
}

function handleError(err) {
  console.log("Oh noooo!");
  console.log(err);
}

makePizza(["cheese", "pineapple"])
  .then((pizza) => {
    console.log(pizza);
  })
  .catch(handleError);

makePizza(["pepperoni", "ham"])
  .then((pizza) => {
    console.log(pizza);
    return makePizza(["ham", "cheese"]);
  })
  .then((pizza) => {
    console.log(pizza);
    return makePizza(["hot peppers", "onion", "feta"]);
  })
  .then((pizza) => {
    console.log(pizza);
    return makePizza(["pineapple"]);
  })
  .then((pizza) => {
    console.log(pizza);
    return makePizza(["one", "two", "three", "four", "one", "two", "three", "four", "one", "two", "three", "four"]);
  })
  .then((pizza) => {
    console.log("All done! Here is your last pizza!");
    console.log(pizza);
  });

//* `Promise.allSettled()`
const p1 = makePizza(["pep"]);
const p2 = makePizza(["pineapple"]);

const dinnerPromise2 = Promise.allSettled([p1, p2]);
dinnerPromise2.then((results) => {
  console.log(results);
});

/*
  eslint
    no-unused-vars: "off",
    no-console: "off",
    prefer-promise-reject-errors: "off",
*/
