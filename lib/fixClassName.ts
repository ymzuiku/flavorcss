import { compMap } from "./cache";
import { device } from "./device";

export const pesudoList = {
  hover: ":hover",
  focus: ":focus",
  active: ":active",
  "first-child": ":first-child",
  "last-child": ":last-child",
  blank: ":blank",
  checked: ":checked",
  current: ":current",
  disabled: ":disabled",
  "focus-within": ":focus-within",
  "in-range": ":in-range",
  visited: ":visited",
  even: ":nth-child(even)",
  odd: ":nth-child(odd)",
  "placeholder-shown": ":placeholder-shown",
  after: "::after",
  before: "::before",
  placeholder: "::-webkit-input-placeholder",
} as any;

export const mediaList = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
} as any;

const fixCache = {} as any;

interface FixClassName {
  comp: (params: string[]) => string;
  pesudo: string;
  media: string;
  name: string;
  realName: string;
  query: string;
  value: string;
}

export function fixClassName(group: string, css: string): FixClassName {
  const _key = group + "_$$_" + css;
  const old = fixCache[_key];
  if (old) {
    return old;
  }
  const out: FixClassName = {
    comp: void 0 as any,
    pesudo: "",
    media: "",
    name: "",
    realName: "",
    value: "",
    query: "",
  };

  if (!css) {
    fixCache[_key] = out;
    return out;
  }

  let compList = compMap[group];

  const list = css.split(":");

  list.forEach((v, i) => {
    if (pesudoList[v]) {
      out.pesudo = pesudoList[v];
    } else if (compList && compList[v]) {
      out.comp = compList[v];
    } else if (mediaList[v]) {
      out.media = `@media screen and (min-width: ${mediaList[v]})`;
    } else if ((device() as any)[v] !== void 0) {
      out.media = `@media screen and (min-width: ${
        (device() as any)[v] ? "0px" : "9999px"
      })`;
    } else if (!out.comp && !out.name) {
      out.name = v;
    } else if (!out.value) {
      // 若是组件的参数，将逗号替换成^^^
      if ((out as any).comp) {
        v = v.replaceAll(/\((.*?)\)/g, (v) => {
          return v.replace(/\,/g, "^^^");
        });
      }
      out.value = v;
    } else if (!out.query) {
      out.query = v;
    }
  });
  fixCache[_key] = out;
  return out;
}
