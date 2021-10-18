import { addStyle } from "./addStyle";
import { atomCache, classCache } from "./caches";
import { medias } from "./medias";

export function parseClass(className: string) {
  if (classCache[className]) {
    return;
  }
  className[className] = true;
  const list = className.split(" ");
  list.forEach((css) => {
    const cssText = parseAtom(css);
    if (cssText) {
      addStyle(cssText);
    }
  });
}

function changeSymbol(css: string) {
  // 常用标点符号转译
  return css.replace(
    /(\:|#|\*|!|,|\.|>|<|@|~|%|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,
    (v) => "\\" + v,
  );
}

function changeVariable(val: string) {
  return val.replace(/((?!\-)-\-|\+|\*|\/)/, (v) => ` ${v} `)
    .replace(
      /(--[a-zA-Z0-9]*)/g,
      (v) => `var(${v})`,
    ).split("|").join(
      " ",
    );
  return val.replace(/--/g, "~~").replace(/(\-|\+|\*|\/)/, (v) => ` ${v} `)
    .replace(/~~/g, "--").replace(
      /(--[a-zA-Z0-9]*)/g,
      (v) => `var(${v})`,
    ).split("|").join(
      " ",
    );
  // return val.split("|").map((v) => {
  //   if (/^--/.test(v)) {
  //     return `var(${v})`;
  //   }
  //   return v;
  // }).join(" ");
}

export function parseAtom(css: string): string {
  if (atomCache[css]) {
    return "";
  }
  atomCache[css] = true;
  const list = css.split(":");
  const len = list.length;
  if (len === 2) {
    return `.${changeSymbol(css)} { ${list[0]}: ${changeVariable(list[1])} }`;
  }

  if (len === 3) {
    const media = medias[list[0]];
    if (media) {
      return `${media} { .${changeSymbol(css)} { ${list[1]}: ${
        changeVariable(list[2])
      } } }`;
    }
    return `.${changeSymbol(css)}:${list[0]} { ${list[1]}: ${
      changeVariable(list[2])
    } }`;
  }

  if (len === 4) {
    const media = medias[list[0]];
    if (media) {
      const media2 = medias[list[1]];
      if (media2) {
        return `${media} { ${media2} { .${changeSymbol(css)} { ${list[2]}: ${
          changeVariable(list[3])
        } } } }`;
      }
      return `${media} { .${changeSymbol(css)}:${list[1]} { ${list[2]}: ${
        changeVariable(list[3])
      } } }`;
    }
  }

  if (len === 5) {
    const media = medias[list[0]];
    if (media) {
      const media2 = medias[list[1]];
      if (media2) {
        return `${media} { ${media2} { .${changeSymbol(css)}:${list[2]} { ${
          list[3]
        }: ${changeVariable(list[4])} } } }`;
      }
    }
  }

  return "";
}
