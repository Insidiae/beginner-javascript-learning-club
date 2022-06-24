// //* Selecting Elements
// const p = document.querySelector("p");
// const imgs = document.querySelectorAll(".item img");
// const item2 = document.querySelector(".item2");
// const item2Image = item2.querySelector("img");
// const heading = document.querySelector("h2");

// //* Element Properties and Methods
// console.log(heading.textContent);
// console.log(heading.innerText);
// //? Set the textContent property on that element
// // heading.textContent = "Wes is cool";
// // console.log(heading.textContent);
// // console.log(heading.innerText);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector(".pizza");
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// //? You can also do this instead of using template strings:
// pizzaList.insertAdjacentText("afterbegin", "🍕");
// pizzaList.insertAdjacentText("beforeend", "🍕");

//* Working with Classes
const pic = document.querySelector(".nice");
pic.classList.add("open");
pic.classList.remove("cool");

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle("round");
}

pic.addEventListener("click", toggleRound);

//* Built-in and Custom Data Attributes
pic.alt = "Cute Pup"; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter ONLY
pic.width = 200; // setter

//? Wait until we actually finish downloading the image
// pic.addEventListener("load", () => {
//   console.log(pic.naturalWidth);
// });

pic.setAttribute("wes-is-cool", "REALLY CUTE PUP");
console.log(pic.getAttribute("alt"));

const custom = document.querySelector(".custom");
console.log(custom.dataset);

custom.addEventListener("click", () => {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
});

/*
eslint
  no-unused-vars: "off",
  no-console: "off",
*/
