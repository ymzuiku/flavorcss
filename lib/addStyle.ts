import { cache } from "./cache";
import { fixClassName } from "./fixClassName";

const lastErrorMap = {
  "(": 1,
  ";": 1,
  ":": 1,
  "=": 1,
} as any;

interface AddStyle {
  css: string;
  name?: string;
  media?: string;
  mediaName?: string;
  pesudo?: string;
  group?: string;
}

export const addStyle = ({
  css,
  name = "",
  media = "",
  mediaName = "",
  pesudo = "",
  group = "",
}: AddStyle) => {
  if (!css) {
    return;
  }

  // debugger;
  const _key = `^sty_${css}_${name}_${media}_${pesudo}_${group}`;
  if (cache.classNameCache[_key]) {
    return;
  }
  cache.classNameCache[_key] = true;

  // 计算伪类
  // const list = css.split(":");
  const fix = fixClassName(group, css);

  // 内容使用移除了伪类的字符串
  let val = fix.value;

  // 若没有内容，为默认 css-class，不进行处理
  if (!val) {
    return;
  }

  const last = val[val.length - 1];

  // lastErrorMap 用户校验最后一位，以忽略常见的错误
  if (lastErrorMap[last]) {
    return;
  }

  if (last === "!") {
    val = val.replace(/(!$)/, " !important");
  }

  if (fix.media) {
    media = fix.media;
  }
  if (fix.mediaName) {
    mediaName = fix.mediaName;
  }
  if (fix.pesudo) {
    pesudo = fix.pesudo;
  }

  // 多行空格 "a b c" "c e f" -> a|b|c~d|e|f
  if (/\~/.test(val)) {
    const _list = val.split("~");
    let _subSss = _list
      .map((v) => {
        if (!v) {
          return "";
        }
        return `"${v}"`;
      })
      .join(" ");
    val = " " + _subSss;
    val += ";";
  }
  // 兼容calc
  val = val.replace(/calc\((.*?)\)/g, (item) => {
    item = item.replace(/(-|\+|\*|\/)/g, (v) => " " + v + " ");
    return item;
  });
  val = val.replace(/\|/g, " ");

  // 目的兼容 var() 的写法
  val = val.replace(/var\((.*?)\)/g, (v) => {
    return v.replace(/(var\(|\))/g, "");
  });
  // --dog 转译成 var(--dog)
  val = val.replace(/--([a-zA-Z0-9_-]*)/g, (v) => `var(${v})`);
  // ^^^ 转译成 , 兼容组件参数的逗号问题
  val = val.replace(/\^\^\^/g, ",");

  // 常用标点符号转译
  const key = (name || css).replace(
    /(\:|#|\*|!|,|\.|>|<|@|~|%|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,
    (v) => "\\" + v
  );

  const groupKey = group ? `.\\*${group}` : "";
  if (/^(\w|\*)/.test(pesudo)) {
    pesudo = " " + pesudo;
  }
  pesudo = pesudo.replace(/\|/g, " ");

  const ele = document.createElement("style");

  if (media) {
    ele.textContent = `${media} {.${key}${groupKey}${pesudo}{${fix.name}:${val}}}`;
  } else {
    ele.textContent = `.${key}${groupKey}${pesudo}{${fix.name}:${val}}`;
  }
  ele.setAttribute("flavor-css", "");
  document.head.append(ele);

  if (mediaName) {
    const mediaEle = document.createElement("style");
    mediaEle.textContent = `.media-${mediaName} .${key}${groupKey}${pesudo}{${fix.name}:${val}}`;
    mediaEle.setAttribute("flavor-css", "");
    document.head.append(mediaEle);
  }
};
