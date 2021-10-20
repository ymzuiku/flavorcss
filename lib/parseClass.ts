import { addStyle } from "./addStyle";
import { atomCache, classCache } from "./caches";
import { parser } from "./parser";

export function parseClass(name: string) {
  if (classCache[name]) {
    return;
  }
  classCache[name] = true;

  const list = name
    .replace("\n", " ")
    .split(" ")
    .map((v) => v.trim())
    .filter(Boolean);
  list.forEach((css) => {
    if (atomCache[css]) {
      return;
    }
    atomCache[css] = true;
    const cssText = parser(css);
    if (cssText) {
      addStyle(cssText);
    }
  });
}
