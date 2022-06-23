function outer() {
  const outerVar = "Hey I am the outer Var!";

  function inner() {
    const innerVar = "Hey I am an inner var!";
    console.log(innerVar);
    console.log(outerVar);
  }

  return inner;
}

const innerFn = outer();
innerFn();

function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting("hello");
const sayHey = createGreeting("hey");
console.log(sayHello("wes"));
console.log(sayHello("kait"));
console.log(sayHey("kait"));

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your name ${gameName} score is ${score}`;
  };
}

const hockeyGame = createGame("Hockey");
const soccerGame = createGame("Soccer");

/*
eslint
  no-unused-vars: "off",
  no-console: "off",
  no-plusplus: "off",
*/
