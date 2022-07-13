const go = document.querySelector(".go");

function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function animatePromise(event) {
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
}

async function animateAsync(event) {
  const el = event.currentTarget;
  // 1. Change the text to GO when clicked
  el.textContent = "GO";

  // 2. Make it a circle after 2 seconds
  await wait(2000);
  el.classList.add("circle");

  // 3. Make it red after 0.5s
  await wait(500);
  el.classList.add("red");

  // 4. make it square after 0.25s
  await wait(250);
  el.classList.remove("circle");

  // 5. make it purple after 0.3s
  await wait(300);
  el.classList.remove("red");
  el.classList.add("purple");

  // 6. fade out after 0.5s
  await wait(500);
  el.classList.add("invisible");

  await wait(500);
  console.log("You have reacted the 7th layer of async + await");
  el.classList.remove("invisible", "purple");
}

go.addEventListener("click", animateAsync);

/*
  eslint
    no-unused-vars: "off",
    no-console: "off",
*/
