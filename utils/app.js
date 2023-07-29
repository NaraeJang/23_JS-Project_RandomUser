import get from "./getElement.js";

const URL = "https://randomuser.me/api/";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];
console.log(btns);

const fetchUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data.results[0]);
};

// fetchUser(URL);
