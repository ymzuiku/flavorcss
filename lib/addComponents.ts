export const compList = {} as {
  [key: string]: ((param: string) => string)[];
};

export const addComponents = (html: string) => {
  if (!html) {
    return;
  }
  html = html.replace("\n", "");
  // 兼容注释带空格
  html = html.replace(/(\/\/\s)/g, "//");
  html
    .trim()
    .split(";")
    .forEach((line) => {
      let [name, ...items] = line.split(":");
      const itemStr = items.join(":");
      name = name.trim();

      if (name) {
        const list = itemStr.split(" ");
        list.filter(Boolean).forEach((item) => {
          _fixComp(name, item);
        });
      }
      // line
      //   .split(" ")
      //   .filter(Boolean)
      //   .forEach((item) => {});
    });
};

const lock = {} as any;

const regs = Array(10)
  .fill(0)
  .map((i) => {
    return new RegExp(`(\\$${i + 1})`, "g");
  });

const _fixComp = (name: string, value: string) => {
  const key = `${name}___${value}`;
  if (lock[key]) {
    return;
  }

  lock[key] = true;
  if (!compList[name]) {
    compList[name] = [];
  }
  compList[name].push((param: string) => {
    const values = param.split(",");
    let css = value;

    values.forEach((v, i) => {
      css = css.replace(regs[i], v);
    });

    return css;
  });
};
