import { addStyle } from "./addStyle";
import { parser } from "./parser";

const classNameCache = {} as any;

export const addCss = (css: string) => {
  const key = "-" + css;
  if (classNameCache[key]) {
    return css;
  }

  classNameCache[key] = true;
  if (!/:/.test(css)) {
    return;
  }
  css
    .split(" ")
    .filter(Boolean)
    .forEach((item) => {
      if (classNameCache[item]) {
        return;
      }
      classNameCache[item] = true;

      const fix = parser(item);
      if (fix.comp) {
        fix.comp.forEach((fn) =>
          fn(fix.value)
            .split(" ")
            .filter(Boolean)
            .forEach((v) => {
              addStyle(parser(v, item));
            })
        );
      } else {
        addStyle(fix);
      }
    });

  return css;
};
