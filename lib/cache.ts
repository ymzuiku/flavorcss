import { regElement, regGroup } from "./observeClass";

export const cache = {
  compMap: {
    "": {},
  } as {
    [key: string]: { [key: string]: (params: string[]) => string };
  },
  classNameCache: {} as any,
};
export const reset = () => {
  document.head.querySelectorAll("style[flavor-css]").forEach((e) => {
    e.remove();
  });
  cache.compMap = {};
  cache.classNameCache = {};
  document.querySelectorAll("[flavor]").forEach(regGroup as any);
  document.body.querySelectorAll("[class]").forEach(regElement as any);
};
