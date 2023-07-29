import get from "./getElement.js";
import fetchUser from "./fetchUser.js";
import displayUser from "./displayUser.js";

const URL = "https://randomuser.me/api/";

const btn = get(".btn");

const showUser = async () => {
  // fetch user
  const person = await fetchUser(URL);

  // display user
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
