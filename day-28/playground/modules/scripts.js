// import first, { returnHi as sayHi, middle, last } from "./utils.js";
// // import westerhoff from "./wes.js";
// import * as everything from "./wes.js";

// const name = "wes";

// console.log(sayHi(name));
// console.log(first, middle, last);
// // console.log(westerhoff);
// console.log(everything);

import { handleButtonClick } from "./handlers.js";

const button = document.querySelector("button");
button.addEventListener("click", handleButtonClick);

/*
  eslint
    no-console: "off",
*/
