function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
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

function handleError(error) {
  console.log("ohhh noooo");
  console.error(error);
}

//* Use a try/catch block
async function go() {
  try {
    const pizza = await makePizza(["pineapple"]);
    return pizza;
  } catch (error) {
    console.error(error);
  }
}

go();

async function go2() {
  //* Catch it as you await
  const pizza = await makePizza(["pineapple"]).catch(handleError);
  return pizza;
}

go2();

async function unsafeGo() {
  const pizza = await makePizza(["pineapple"]);
  return pizza;
}

//* Catch it at call time
unsafeGo().catch(handleError);

//* Make a safe function with a HOF
function makeSafe(fn, errorHandler) {
  return function () {
    fn().catch(errorHandler);
  };
}

const safeGo = makeSafe(unsafeGo, handleError);

safeGo();

/*
  eslint
    no-unused-vars: "off",
    no-console: "off",
*/
