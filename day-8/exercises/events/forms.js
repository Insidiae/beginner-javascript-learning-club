//* `event.preventDefault()`
const wes = document.querySelector(".wes");

wes.addEventListener("click", (event) => {
  const shouldChangePage = confirm("This website might be malicious! Do you wish to proceed?");

  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector(`[name="signup"]`);
signupForm.addEventListener("submit", (event) => {
  // event.preventDefault();

  // console.log(event.currentTarget.name.value);
  // console.log(event.currentTarget.email.value);
  // console.log(event.currentTarget.agree.checked);

  const name = event.currentTarget.name.value;
  if (name.includes("Chad")) {
    alert("Sorry bro");
    event.preventDefault();
  }
});

//* Other types of form events
function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener("keyup", logEvent);
signupForm.name.addEventListener("keydown", logEvent);
signupForm.name.addEventListener("focus", logEvent);
signupForm.name.addEventListener("blur", logEvent);

//* Accessibility Gotchas
const photo = document.querySelector(".photo");

function handlePhotoClick(event) {
  if (event.type === "click" || event.key === "Enter") {
    console.log("You clicked the photo");
  }
}

photo.addEventListener("click", handlePhotoClick);
photo.addEventListener("keyup", handlePhotoClick);

/*
eslint
  no-unused-vars: "off",
  no-console: "off",
  no-restricted-globals: "off"
*/
