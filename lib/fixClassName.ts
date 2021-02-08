import { cache } from "./cache";
import { device } from "./device";

function setCompAndName(fix: FixClassName, compList: any, val: string) {
  fix.comp = compList[val];
  if (fix.comp as any) {
    fix.compName = val;
  } else {
    fix.name = val;
  }
}

function setMedia(fix: FixClassName, val: string) {
  if (mediaList[val]) {
    fix.media = mediaList[val];
    fix.mediaName = val;
  } else if ((device() as any)[val] !== void 0) {
    fix.media = `@media screen and (min-width: ${
      (device() as any)[val] ? "0px" : "9999px"
    })`;
    fix.mediaName = val;
  }
}

export const mediaList = {
  all: "",
  print: "@media print",
  speech: "@media speech",
  dark: "@media (prefers-color-scheme: dark)",
  xs: "@media screen and (min-width: 480px)",
  sm: "@media screen and (min-width: 640px)",
  md: "@media screen and (min-width: 768px)",
  lg: "@media screen and (min-width: 1024px)",
  xl: "@media screen and (min-width: 1280px)",
  xxl: "@media screen and (min-width: 1536px)",
  "in-xs": "@media screen (max-width:479px) and (min-width: 0px)",
  "in-sm": "@media screen (max-width:767px) and (min-width: 479px)",
  "in-md": "@media screen (max-width:1023px) and (min-width: 767px)",
  "in-lg": "@media screen (max-width:1279px) and (min-width: 1023px)",
  "in-xl": "@media screen (max-width:1535px) and (min-width: 1279px)",
  "in-xxl": "@media screen (max-width:9999px) and (min-width: 1535px)",
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

function setValue(fix: FixClassName, value: string) {
  if (!value) {
    return;
  }
  // 若是组件的参数，将逗号替换成^^^
  if ((fix as any).comp) {
    value = value.replace(/\((.*?)\)/g, (v) => {
      return v.replace(/\,/g, "^^^");
    });
  }
  fix.value = value;
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

  // 双斜杠可以注释 css
  if (!css || (css[0] === "/" && css[1] === "/")) {
    fixCache[_key] = out;
    return out;
  }

  const compList = cache.compMap[group] || {};

  const list = css.split(":");
  // let compIndex = -1;
  // let queryIndex = -1;

  // 最后一位为媒体查询
  setMedia(out, list[0]);
  if (out.mediaName) {
    // pesudoList[0] = "";
    list.shift();
  }

  const len = list.length;
  const last = list[len - 1];
  const sec = len >= 2 ? list[len - 2] : "";
  const pesudoList = [...list];
  if (compList[last]) {
    out.comp = compList[last];
    out.compName = last;
    pesudoList.pop();
  } else if (sec) {
    setCompAndName(out, compList, sec);
    setValue(out, last);
    pesudoList.pop();
    pesudoList.pop();
  } else {
    out.name = last;
    pesudoList.pop();
  }
  out.pesudo = pesudoList.join(":");
  out.pesudoName = out.pesudo;

  fixCache[_key] = out;

  return out;
}
