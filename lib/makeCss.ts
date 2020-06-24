const getTemplate = (...args: any[]) => {
  const [template, ...param] = args;

  let text = "";
  if (typeof template === "string") {
    text = template;
  } else if (template) {
    template.forEach((v: any, i: number) => {
      text += v;
      if (param[i]) {
        text += param[i];
      }
    });
  }
  return text;
};

export default (...args: any[]) => {
  const text = getTemplate(...args);

};
