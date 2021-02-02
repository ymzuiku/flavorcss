export const createDivByHTML = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div;
};

export const createDivLoadHTML = async (loadHTML) => {
  const html = await Promise.resolve(loadHTML);
  return createDivByHTML(html);
};
