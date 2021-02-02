import { loadHTML } from "/js/loadHTML.js";
(async () => {
  const header = await loadHTML("/components/header.html");
  document.body.insertAdjacentHTML("afterbegin", header);
})();
