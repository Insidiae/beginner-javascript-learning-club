//* Adding event listeners
const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

function handleClick() {
  console.log("IT GOT CLICKED!!");
}

butts.addEventListener("click", handleClick);
coolButton.addEventListener("click", handleClick);

//* Removing event listeners
butts.removeEventListener("click", handleClick);

butts.addEventListener("click", () => {
  console.log("I am an anon!");
});
//! this won't remove the event listener!
butts.removeEventListener("click", () => {
  console.log("I am an anon!");
});

const hooray = () => console.log("HOORAY!");
coolButton.addEventListener("click", hooray);
// Saving the anon function into a variable lets you remove the listener:
coolButton.removeEventListener("click", hooray);

//* Listening to events on multiple elements
const buyButtons = document.querySelectorAll("button.buy");

// function buyItem() {
//   console.log("BUYING ITEM");
// }

// buyButtons.forEach((buyButton) => {
//   console.log("Binding the buy button");
//   buyButton.addEventListener("click", buyItem);
// });

//* Events
// function handleBuyButtonClick(event) {
//   const button = event.target;

//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(event.target === event.currentTarget);
// }

buyButtons.forEach((buyButton) => {
  // eslint-disable-next-line
  buyButton.addEventListener("click", handleBuyButtonClick);
});

//* Event Propagation
function handleBuyButtonClick(event) {
  const button = event.target;
  console.log("You clicked a button!");
  // event.stopPropagation();

  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
}

window.addEventListener(
  "click",
  (event) => {
    console.log("you clicked the window");
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
  },
  { capture: true },
);

//* The `this` keyword
const photoEl = document.querySelector(".photo");
// `this` refers to the `photoEl`
photoEl.addEventListener("mouseenter", function (e) {
  console.count(e.currentTarget);
  console.log(this);
});
// `this` refers to the `window`
photoEl.addEventListener("mouseenter", (e) => {
  console.count(e.currentTarget);
  console.log(this);
});

/*
eslint
  no-unused-vars: "off",
  no-console: "off",
*/
