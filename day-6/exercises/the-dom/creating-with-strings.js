const item = document.querySelector(".item");

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;
//! Be careful when accepting strings as inputs,
//! or else malicious users can do something to potentially hijack your page!
//! This is what's known as Cross-Site Scripting (XSS)
// const desc = `Cute Pup <img onload="alert('1 4m l33t h4x0rz!!!!!1!1!1')" src="https://picsum.photos/50"/>`;
const myHTML = `
  <div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}" />
  </div>
`;

//? Dump the whole string into raw HTML...
// item.innerHTML = myHTML;

// const itemImage = document.querySelector(".wrapper img");
// itemImage.classList.add("round");

//? ...Or turn them into actual DOM nodes first
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector("img"));

document.body.appendChild(myFragment);

/*
eslint
  no-unused-vars: "off",
  no-console: "off",
*/
