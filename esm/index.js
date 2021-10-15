var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// lib/addStyle.ts
var lastErrorMap = {
  "(": 1,
  ";": 1,
  ":": 1,
  "=": 1
};
var addStyle = ({
  css,
  name = "",
  media = "",
  mediaName = "",
  pesudo = "",
  value = ""
}) => {
  if (!name || !value) {
    return;
  }
  const last = value[value.length - 1];
  if (lastErrorMap[last]) {
    return;
  }
  if (last === "!") {
    value = value.replace(/(!$)/, " !important");
  }
  if (/\~/.test(value)) {
    const _list = value.split("~");
    let _subSss = _list.map((v) => {
      if (!v) {
        return "";
      }
      return `"${v}"`;
    }).join(" ");
    value = " " + _subSss;
    value += ";";
  }
  value = value.replace(/calc\((.*?)\)/g, (item) => {
    item = item.replace(/(-|\+|\*|\/)/g, (v) => " " + v + " ");
    return item;
  });
  value = value.replace(/\|/g, " ");
  value = value.replace(/var\((.*?)\)/g, (v) => {
    return v.replace(/(var\(|\))/g, "");
  });
  value = value.replace(/--([a-zA-Z0-9_-]*)/g, (v) => `var(${v})`);
  value = value.replace(/\^\^\^/g, ",");
  const key = css.replace(/(\:|#|\*|!|,|\.|>|<|@|~|%|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g, (v) => "\\" + v);
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

// lib/regs.ts
var spaceReg = /(\n| )/;

// lib/addComponents.ts
var compList = {};
var addComponents = (html) => {
  if (!html) {
    return;
  }
  html = html.replace("\n", "");
  html = html.replace(/(\/\/\s)/g, "//");
  html.trim().split(";").forEach((line) => {
    let [name, ...items] = line.split(":");
    const itemStr = items.join(":");
    name = name.trim();
    if (name) {
      const list = itemStr.split(spaceReg);
      list.filter(Boolean).forEach((item) => {
        _fixComp(name, item);
      });
    }
  });
};
var lock = {};
var regs = Array(10).fill(0).map((_, i) => {
  return new RegExp(`(\\$${i + 1})`, "g");
});
var _fixComp = (name, value) => {
  const key = `${name}___${value}`;
  if (lock[key]) {
    return;
  }
  lock[key] = true;
  if (!compList[name]) {
    compList[name] = [];
  }
  compList[name].push((param) => {
    const values = param.split(",");
    let css = value;
    values.forEach((v, i) => {
      css = css.replace(regs[i], v);
    });
    return css;
  });
};

// lib/os.ts
var ua = "chrome";
if (typeof window !== void 0) {
  ua = navigator.userAgent.toLocaleLowerCase();
}
var android = /(?:android)/.test(ua);
var firefox = /(?:firefox)/.test(ua);
var chrome = /(?:chrome|crios)/.test(ua);
var safari = /(safari)/.test(ua);
var tablet = /(?:ipad|playbook)/.test(ua) || android && !/(?:mobile)/.test(ua) || firefox && /(?:tablet)/.test(ua);
var ios = /(?:iphone)/.test(ua) && !tablet;
var desktop = !ios && !android;
var phone = !desktop;
var wechat = phone && /(micromessenger|wechat)/.test(ua);
var os = {
  android,
  firefox,
  chrome,
  tablet,
  ios,
  wechat,
  desktop,
  phone,
  safari
};

// lib/parser.ts
var mediaList = {
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
  "in-xxl": "@media screen (max-width:9999px) and (min-width: 1535px)"
};
function setCompAndName(fix, val) {
  fix.comp = compList[val];
  fix.compName = val;
}
function setMedia(fix, val) {
  if (mediaList[val]) {
    fix.media = mediaList[val];
    fix.mediaName = val;
  } else if (os[val] !== void 0) {
    fix.media = `@media screen and (min-width: ${os[val] ? "0px" : "9999px"})`;
    fix.mediaName = val;
  }
}
function setValue(fix, value) {
  if (!value) {
    return;
  }
  if (fix.comp) {
    value = value.replace(/\((.*?)\)/g, (v) => {
      return v.replace(/\,/g, "^^^");
    });
  }
  fix.value = value;
}
function parser(css, baseCss) {
  const _key = "_$$_" + css;
  const out = {
    css: baseCss || css,
    compName: "",
    comp: void 0,
    pesudo: "",
    pesudoName: "",
    media: "",
    mediaName: "",
    name: "",
    value: "",
    query: ""
  };
  if (!css || css[0] === "/" && css[1] === "/") {
    return out;
  }
  const list = css.split(":");
  setMedia(out, list[0]);
  if (out.mediaName) {
    list.shift();
  }
  const len = list.length;
  let last = list[len - 1];
  let secLast = len >= 2 ? list[len - 2] : "";
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

// lib/addCss.ts
var classNameCache = {};
var addCss = (css) => {
  const key = "-" + css;
  if (classNameCache[key]) {
    return css;
  }
  classNameCache[key] = true;
  css.split(spaceReg).filter(Boolean).forEach((item) => {
    if (classNameCache[item]) {
      return;
    }
    classNameCache[item] = true;
    const fix = parser(item);
    if (fix.comp) {
      fix.comp.forEach((fn) => fn(fix.value).split(spaceReg).filter(Boolean).forEach((v) => {
        const obj = parser(v, item);
        addStyle(__spreadProps(__spreadValues({}, obj), {
          pesudo: obj.pesudo || fix.pesudo,
          media: obj.media || fix.media,
          mediaName: obj.mediaName || fix.mediaName
        }));
      }));
    } else {
      addStyle(fix);
    }
  });
  return css;
};

// lib/observeClass.ts
var observerSetting = {
  ignoreObserveComponent: false
};
function regComponents(ele) {
  if (!ele.hasAttribute("flavor-css")) {
    return;
  }
  let html = "";
  if (ele.tagName === "TEMPLATE") {
    const content = ele.content.cloneNode(true);
    if (content) {
      html = content.textContent;
    }
  } else {
    html = ele.textContent;
  }
  addComponents(html);
}
function regElement(ele) {
  if (!ele) {
    return;
  }
  if (ele.className && typeof ele.className === "string") {
    addCss(ele.className);
  }
}
var _observer = () => {
  const onMutations = (mutationsList, ...args) => {
    const len = mutationsList.length;
    for (let i = 0; i < len; i++) {
      const mutation = mutationsList[i];
      if (mutation.type === "childList") {
        const ele = mutation.target;
        if (ele.__flavorIgnore && ele.closest("[flavor-ignore]")) {
          if (!ele.getAttribute("flavor-ignore")) {
            ele.__flavorIgnore = true;
            return;
          }
        }
        if (!observerSetting.ignoreObserveComponent) {
          regComponents(ele);
        }
        regElement(ele);
        if (mutation.addedNodes.length) {
          if (!observerSetting.ignoreObserveComponent) {
            ele.querySelectorAll("[flavor-css]").forEach(regComponents);
          }
          ele.querySelectorAll("[class]").forEach(regElement);
        }
      } else if (mutation.type === "attributes") {
        regElement(mutation.target);
      }
    }
  };
  const observer = new MutationObserver(onMutations);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class", "flavor-css"],
    characterData: false,
    attributeOldValue: false,
    characterDataOldValue: false
  });
};
if (typeof window !== void 0) {
  window.addEventListener("load", () => {
    document.querySelectorAll("[flavor-css]").forEach(regComponents);
    document.querySelectorAll("[class]").forEach(regElement);
    _observer();
  });
}

// lib/index.ts
var flavorcss = {
  addStyle,
  os,
  addCss,
  addComponents,
  mediaList,
  observerSetting
};
if (typeof window !== void 0) {
  window.flavorcss = flavorcss;
}
export {
  flavorcss
};
