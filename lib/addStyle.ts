import { parser } from "./parser";

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
  value?: string;
}

export const addStyle = ({
  css,
  name = "",
  media = "",
  mediaName = "",
  pesudo = "",
  value = "",
}: AddStyle) => {
  // 若没有内容，为默认 css-class，不进行处理
  if (!name || !value) {
    return;
  }

  const last = value[value.length - 1];

  // lastErrorMap 用户校验最后一位，以忽略常见的错误
  if (lastErrorMap[last]) {
    return;
  }

  if (last === "!") {
    value = value.replace(/(!$)/, " !important");
  }

  // 多行空格 "a b c" "c e f" -> a|b|c~d|e|f
  if (/\~/.test(value)) {
    const _list = value.split("~");
    let _subSss = _list
      .map((v) => {
        if (!v) {
          return "";
        }
        return `"${v}"`;
      })
      .join(" ");
    value = " " + _subSss;
    value += ";";
  }
  // 兼容calc
  value = value.replace(/calc\((.*?)\)/g, (item) => {
    item = item.replace(/(-|\+|\*|\/)/g, (v) => " " + v + " ");
    return item;
  });
  // 转化 | 至空格
  value = value.replace(/\|/g, " ");

  // 目的兼容 var() 的写法
  value = value.replace(/var\((.*?)\)/g, (v) => {
    return v.replace(/(var\(|\))/g, "");
  });
  // --dog 转译成 var(--dog)
  value = value.replace(/--([a-zA-Z0-9_-]*)/g, (v) => `var(${v})`);
  // ^^^ 转译成 , 兼容组件参数的逗号问题
  value = value.replace(/\^\^\^/g, ",");

  // 常用标点符号转译
  const key = css.replace(
    /(\:|#|\*|!|,|\.|>|<|@|~|%|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,
    (v) => "\\" + v
  );

  if (/^(\w|\*)/.test(pesudo)) {
    pesudo = " " + pesudo;
  }
  pesudo = pesudo.replace(/\|/g, " ");

  const ele = document.createElement("style");

  if (media) {
    ele.textContent = `${media} {.${key}${pesudo}{${name}:${value}}}`;
  } else {
    ele.textContent = `.${key}${pesudo}{${name}:${value}}`;
  }

  ele.setAttribute("flavor-css", "");
  document.head.append(ele);

  if (mediaName) {
    const mediaEle = document.createElement("style");
    mediaEle.textContent = `.media-${mediaName} .${key}${pesudo}{${name}:${value}}`;
    mediaEle.setAttribute("flavor-css", "");
    document.head.append(mediaEle);
  }
};
