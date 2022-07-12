const go = document.querySelector(".go");

function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

go.addEventListener("click", (event) => {
  const el = event.currentTarget;
  // 1. Change the text to GO when clicked
  el.textContent = "GO";
  wait(2000)
    .then(() => {
      // 2. Make it a circle after 2 seconds
      el.classList.add("circle");
      return wait(500);
    })
    .then(() => {
      // 3. Make it red after 0.5s
      el.classList.add("red");
      return wait(250);
    })
    .then(() => {
      // 4. make it square after 0.25s
      el.classList.remove("circle");
      return wait(300);
    })
    .then(() => {
      // 5. make it purple after 0.3s
      el.classList.remove("red");
      el.classList.add("purple");
      return wait(500);
    })
    .then(() => {
      // 6. fade out after 0.5s
      el.classList.add("invisible");
      return wait(500);
    })
    .then(() => {
      console.log("You have reacted the 7th layer of promise land");
      el.classList.remove("invisible", "purple");
    });
});

/*
  eslint
    no-unused-vars: "off",
    no-console: "off",
*/
