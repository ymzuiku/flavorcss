import { compList } from "./addComponents";
import { os } from "./os";

interface FixClassName {
  css: string;
  compName: string;
  comp: ((params: string) => string)[];
  pesudo: string;
  pesudoName: string;
  media: string;
  mediaName: string;
  name: string;
  query: string;
  value: string;
}

export const mediaList = {
  all: "",
  print: "@media print",
  speech: "@media speech",
  fine: "@media (pointer: fine)",
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

function setCompAndName(fix: FixClassName, val: string) {
  fix.comp = compList[val];
  fix.compName = val;
}

function setMedia(fix: FixClassName, val: string) {
  if (mediaList[val]) {
    fix.media = mediaList[val];
    fix.mediaName = val;
  } else if ((os as any)[val] !== void 0) {
    fix.media = `@media screen and (min-width: ${
      (os as any)[val] ? "0px" : "9999px"
    })`;
    fix.mediaName = val;
  }
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

export function parser(css: string, baseCss?: string): FixClassName {
  const _key = "_$$_" + css;

  const out: FixClassName = {
    css: baseCss || css,
    compName: "",
    comp: void 0 as any,
    pesudo: "",
    pesudoName: "",
    media: "",
    mediaName: "",
    name: "",
    value: "",
    query: "",
  };

  // 双斜杠可以注释 component
  if (!css || (css[0] === "/" && css[1] === "/")) {
    return out;
  }

  const list = css.split(":");

  // 最后一位为媒体查询
  setMedia(out, list[0]);
  if (out.mediaName) {
    list.shift();
  }

  const len = list.length;
  let last = list[len - 1];
  let secLast = len >= 2 ? list[len - 2] : "";
  // 兼容无参数的情况
  if (len === 1) {
    secLast = last;
    last = "";
  }
  const pesudoList = [...list];
  if (secLast) {
    out.name = secLast;
    setCompAndName(out, secLast);
    setValue(out, last);
    pesudoList.pop();
    pesudoList.pop();
  } else {
    out.name = last;
    pesudoList.pop();
  }
  out.pesudo = pesudoList.join(":");
  out.pesudoName = out.pesudo;

  return out;
}
