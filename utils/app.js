import get from "./getElement.js";
import fetchUser from "./fetchUser.js";

const URL = "https://randomuser.me/api/";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];

const showUser = async () => {
  // fetch user
  const person = await fetchUser(URL);

  // display user
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
