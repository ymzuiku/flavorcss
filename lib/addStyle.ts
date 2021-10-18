export function addStyle(styleText: string) {
  const style = document.createElement("style");
  style.textContent = styleText;
  style.setAttribute("flavor-css", "");
  document.head.appendChild(style);
}
