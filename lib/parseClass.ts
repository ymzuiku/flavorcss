import { addStyle } from "./addStyle";
import { atomCache, classCache } from "./caches";
import { parser } from "./parser";

export function flavor(name: string): string {
  if (classCache[name]) {
    return name;
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

  return name;
}

if (typeof window !== "undefined") {
  flavor("flex-direction:column flex-direction:row flex-direction:column-reverse flex-direction:row-reverse");
}
