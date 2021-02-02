import { loadHTML } from "./loadHTML.js";

export const loadPage = async (url) => {
  const head = await loadHTML("/head.html");
  document.head.innerHTML = head;

  const home = await loadHTML(url);
  document.body.innerHTML = home;
};
