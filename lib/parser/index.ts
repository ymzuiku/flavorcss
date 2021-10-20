import { medias } from "./medias";
import { pseudoClasses, pseudoElements } from "./pseudoElements";

function changePseudo(pseudo: string) {
  if (pseudoClasses[pseudo]) {
    return ":" + pseudo;
  }
  if (pseudoElements[pseudo]) {
    return "::" + pseudo;
  }
  return " " + pseudo;
}

function changeSymbol(css: string) {
  // 常用标点符号转译
  return css.replace(/(\:|#|\*|!|,|\.|>|<|@|~|%|\^|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g, (v) => "\\" + v);
}

function changeVariable(val: string) {
  return val
    .replace(/(--[a-zA-Z0-9\-]*)/g, (v) => `var(${v})`)
    .split("|")
    .join(" ")
    .replace("!", " !important");
}

export function parser(css: string): string {
  const list = css.split(":");
  const len = list.length;
  if (len === 1) {
    return "";
  }

  if (len === 2) {
    return `.${changeSymbol(css)} { ${list[0]}: ${changeVariable(list[1])}; }`;
  }

  if (len === 3) {
    const media = medias[list[0]];
    if (media) {
      return `${media} { .${changeSymbol(css)} { ${list[1]}: ${changeVariable(list[2])}; } }`;
    }
    return `.${changeSymbol(css)}${changePseudo(list[0])} { ${list[1]}: ${changeVariable(list[2])}; }`;
  }

  if (len === 4) {
    const media = medias[list[0]];
    const media2 = medias[list[1]];

    if (media) {
      if (media2) {
        return `${media} { ${media2} { .${changeSymbol(css)} { ${list[2]}: ${changeVariable(list[3])}; } } }`;
      }
      return `${media} { .${changeSymbol(css)}${changePseudo(list[1])} { ${list[2]}: ${changeVariable(list[3])}; } }`;
    }

    if (media2) {
      return `${media2} { .${changeSymbol(css)} ${list[0]} { ${list[2]}: ${changeVariable(list[3])}; } }`;
    }

    return `.${changeSymbol(css)} ${list[0]}${changePseudo(list[1])} { ${list[2]}: ${changeVariable(list[3])}; }`;
  }

  if (len === 5) {
    const media = medias[list[0]];
    const media2 = medias[list[1]];
    if (media && media2) {
      return `${media} { ${media2} { .${changeSymbol(css)}${changePseudo(list[2])} { ${list[3]}: ${changeVariable(
        list[4],
      )}; } } }`;
    }

    const media3 = medias[list[2]];
    if (media2 && media3) {
      return `${media2} { ${media3} { .${changeSymbol(css)} ${list[0]} { ${list[3]}: ${changeVariable(list[4])}; } } }`;
    }
    return `${media2} { .${changeSymbol(css)} ${list[0]}${changePseudo(list[2])} { ${list[3]}: ${changeVariable(
      list[4],
    )}; } }`;
  }

  if (len === 6) {
    const media = medias[list[1]];
    const media2 = medias[list[2]];
    if (media && media2) {
      return `${media} { ${media2} { .${changeSymbol(css)} ${list[0]}${changePseudo(list[3])} { ${
        list[4]
      }: ${changeVariable(list[5])}; } } }`;
    }
  }

  return "";
}
