export const loadHTML = async (url, params) => {
  const html = await fetch(url).then((v) => v.text());
  if (params) {
    Object.keys(parms).forEach((k) => {
      html = html.replace(new RegExp(`\$${k}`), params[v]);
    });
  }
  return html;
};
