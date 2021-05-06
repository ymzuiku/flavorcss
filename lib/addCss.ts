import { addStyle } from "./addStyle";
import { parser } from "./parser";
import { spaceReg } from "./regs";

const classNameCache = {} as any;

export const addCss = (css: string) => {
  const key = "-" + css;
  if (classNameCache[key]) {
    return css;
  }

  classNameCache[key] = true;

  css
    .split(spaceReg)
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
            .split(spaceReg)
            .filter(Boolean)
            .forEach((v) => {
              addStyle({
                pesudo: fix.pesudo,
                media: fix.media,
                mediaName: fix.mediaName,
                ...parser(v, item),
              });
            })
        );
      } else {
        addStyle(fix);
      }
    });

  return css;
};
