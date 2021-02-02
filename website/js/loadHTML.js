export const loadHTML = async (url, params) => {
  const html = await fetch(url).then((v) => v.text());
  if (params) {
    Object.keys(parms).forEach((k) => {
      html = html.replace(new RegExp(`\$${k}`), params[v]);
    });
  }

  const ele = document.createElement("div");
  ele.innerHTML = html;
  ele.querySelectorAll("script").forEach((script) => {
    const ele = document.createElement("script");
    ["src", "type", "innerHTML"].forEach((k) => {
      if (script[k]) {
        ele[k] = script[k];
      }
    });
    document.body.append(ele);
    script.remove();
  });

  return ele.innerHTML;
};
