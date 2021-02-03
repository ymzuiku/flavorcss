import { compMap } from "./cache";
import { device } from "./device";

export const pesudoList = {
  hover: ":hover",
  focus: ":focus",
  active: ":active",
  first: ":first-child",
  last: ":last-child",
  blank: ":blank",
  checked: ":checked",
  current: ":current",
  disabled: ":disabled",
  "focus-within": ":focus-within",
  "focus-visible": ":focus-visible",
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
  dark: "@media (prefers-color-scheme: dark)",
  xxs: "@media screen and (min-width: 375px)",
  xs: "@media screen and (min-width: 480px)",
  sm: "@media screen and (min-width: 640px)",
  md: "@media screen and (min-width: 768px)",
  lg: "@media screen and (min-width: 1024px)",
  xl: "@media screen and (min-width: 1280px)",
  xxl: "@media screen and (min-width: 1536px)",
  "xxs-max": "@media screen and (max-width: 375px)",
  "xs-max": "@media screen and (max-width: 480px)",
  "sm-max": "@media screen and (max-width: 640px)",
  "md-max": "@media screen and (max-width: 768px)",
  "lg-max": "@media screen and (max-width: 1024px)",
  "xl-max": "@media screen and (max-width: 1280px)",
  "xxl-max": "@media screen and (max-width: 1536px)",
} as any;

const fixCache = {} as any;

interface FixClassName {
  comp: (params: string[]) => string;
  compName: string;
  pesudo: string;
  pesudoName: string;
  media: string;
  mediaName: string;
  name: string;
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
    compName: "",
    pesudo: "",
    pesudoName: "",
    media: "",
    mediaName: "",
    name: "",
    value: "",
    query: "",
  };

  if (!css) {
    fixCache[_key] = out;
    return out;
  }

  let compList = compMap[group];

  const list = css.split(":");

  // sm:hover:bg:#f00
  // hover:sm:bg:#f00

  list.forEach((v, i) => {
    if (i === 0) {
      if (mediaList[v]) {
        out.media = mediaList[v];
        out.mediaName = v;
        return;
      } else if ((device() as any)[v] !== void 0) {
        out.media = `@media screen and (min-width: ${
          (device() as any)[v] ? "0px" : "9999px"
        })`;
        out.mediaName = v;
        return;
      }
    }

    if (i < 2 && pesudoList[v]) {
      out.pesudo = pesudoList[v];
      out.pesudoName = v;
    } else if (!out.name && compList && compList[v]) {
      // out.name 必须为空的原因是 有了 name，那么不应该将 value 作为 comp
      out.comp = compList[v];
      out.compName = v;
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
