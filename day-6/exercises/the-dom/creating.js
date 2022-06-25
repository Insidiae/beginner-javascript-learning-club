const myParagraph = document.createElement("p");
myParagraph.textContent = "I am a P";
myParagraph.classList.add("special");

console.log(myParagraph);

const myImage = document.createElement("img");
myImage.src = "https://picsum.photos/500";
myImage.alt = "Nice Photo";
console.log(myImage);

const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement("h2");
heading.textContent = "Cool things";

myDiv.insertAdjacentElement("afterbegin", heading);

//* Exercise: Try to create the ff:
// <ul>
//   <li>One</li>
//   <li>Two</li>
//   <li>Three</li>
//   <li>Four</li>
//   <li>Five</li>
// </ul>
//? Start with the middle list item (Three),
//? and use the APIs we just learned to add the rest

const myList = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "One";
const li2 = document.createElement("li");
li2.textContent = "Two";
const li3 = document.createElement("li");
li3.textContent = "Three";
const li4 = document.createElement("li");
li4.textContent = "Four";
// const li5 = document.createElement("li");
//? You can also clone a new node from existing element:
const li5 = li3.cloneNode(true);
li5.textContent = "Five";

myList.appendChild(li3);
li3.insertAdjacentElement("beforebegin", li2);
myList.insertAdjacentElement("afterbegin", li1);
myList.append(li5);
li3.insertAdjacentElement("afterend", li4);

myDiv.appendChild(myList);

/*
eslint
  no-unused-vars: "off",
  no-console: "off",
*/
