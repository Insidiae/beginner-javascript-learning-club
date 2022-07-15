const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const userEl = document.querySelector(".user");

async function displayUser(username) {
  userEl.textContent = "loading...";
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();

  console.groupCollapsed(`GitHub data for ${username}`);
  console.log(data);
  console.log(data.blog);
  console.log(data.name);
  console.log(data.location);
  console.groupEnd();

  userEl.textContent = `${data.name} (@${data.twitter_username ?? data.login}) - ${data.blog}`;
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  userEl.textContent = `Something went wrong: ${err}`;
}

displayUser("stolinski").catch(handleError);

/*
  eslint
    no-unused-vars: "off",
    no-console: "off",
*/
