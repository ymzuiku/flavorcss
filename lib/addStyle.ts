import { classNameCache } from "./cache";
import { fixClassName } from "./fixClassName";

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
  if (classNameCache[_key]) {
    return;
  }
  classNameCache[_key] = true;

  // 计算伪类
  // const list = css.split(":");
  const fix = fixClassName(group, css);

  // 内容使用移除了伪类的字符串
  let val = fix.value;

  // 若没有内容，为默认 css-class，不进行处理
  if (!val) {
    return;
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
  const _list = val.split("~");
  if (_list.length > 1) {
    val = " " + _list.map((v) => `"${v}"`).join(" ");
    val += ";";
  }
  val = val.replace(/calc\((.*?)\)/g, (item) => {
    item = item.replace(/(-|\+|\*|\/)/g, (v) => " " + v + " ");
    return item;
  });
  // | 转译成空格
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

  const groupKey = group ? `.\\[${group}\\]` : "";

  const ele = document.createElement("style");
  const _name = fix.name.replace("*", "--");
  if (media) {
    ele.textContent = `${media} {.${key}${groupKey}${pesudo} ${fix.query}{${_name}:${val}}}`;
  } else {
    ele.textContent = `.${key}${groupKey}${pesudo} ${fix.query}{${_name}:${val}}`;
  }
  document.head.append(ele);

  if (mediaName) {
    const mediaEle = document.createElement("style");
    mediaEle.textContent = `.media-${mediaName} .${key}${groupKey}${pesudo} ${fix.query}{${_name}:${val}}`;
    document.head.append(mediaEle);
  }
};
