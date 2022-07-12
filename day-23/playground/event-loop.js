const go = document.querySelector(".go");

go.addEventListener("click", (event) => {
  const el = event.currentTarget;
  // 1. Change the text to GO when clicked.
  el.textContent = "GO";
  setTimeout(() => {
    // 2. Make it a circle after 2 seconds
    el.classList.add("circle");
    setTimeout(() => {
      // 3. Make it red after 0.5s
      el.classList.add("red");
      setTimeout(() => {
        // 4. make it square after 0.25s
        el.classList.remove("circle");
        setTimeout(() => {
          // 5. make it purple after 0.3s
          el.classList.remove("red");
          el.classList.add("purple");
          setTimeout(() => {
            // 6. fade out after 0.5s
            el.classList.add("invisible");
            setTimeout(() => {
              console.log("You have reacted the 7th layer of callback hell");
              el.classList.remove("invisible", "purple");
            }, 500);
          }, 500);
        }, 300);
      }, 250);
    }, 500);
  }, 2000);
});

/*
  eslint
    no-unused-vars: "off",
    no-console: "off",
*/
