function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function go() {
  console.log("Starting");
  await wait(2000);
  console.log("Running");
  await wait(200);
  console.log("Ending");
}

// go();

function makePizza(toppings = []) {
  return new Promise((resolve, reject) => {
    // reject if people try with pineapple
    if (toppings.includes("pineapple")) {
      reject(new Error("Seriously? Get out 🍍"));
    }
    const amountOfTimeToBake = 500 + toppings.length * 200;
    // wait 1 second for the pizza to cook:
    setTimeout(() => {
      // when you are ready, you can resolve this promise
      resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(" ")}`);
    }, amountOfTimeToBake);
  });
}

async function makeDinner() {
  const pizzaPromise1 = makePizza(["pepperoni"]);
  const pizzaPromise2 = makePizza(["mushrooms"]);

  const [pep, mush] = await Promise.all([pizzaPromise1, pizzaPromise2]);

  console.log(pep, mush);
}

async function makeDinner2() {
  const pizzaPromise1 = makePizza(["pepperoni"]);
  const pizzaPromise2 = makePizza(["mushrooms"]);

  const pep = await pizzaPromise1;
  const mush = await pizzaPromise2;

  console.log(pep, mush);
}

async function makeDinner3() {
  const pizzaPromise1 = makePizza(["pepperoni"]);
  const pizzaPromise2 = makePizza(["mushrooms"]);

  const [pep, mush] = [await pizzaPromise1, await pizzaPromise2];

  console.log(pep, mush);
}

function measure(...funcs) {
  funcs.forEach(async (func) => {
    const tStart = performance.now();
    await func();
    const tEnd = performance.now();
    console.log(`Time elapsed for ${func.name}: ${(tEnd - tStart).toFixed(2)}ms`);
  });
}

measure(makeDinner, makeDinner2, makeDinner3);

/*
  eslint
    no-unused-vars: "off",
    no-console: "off",
*/
