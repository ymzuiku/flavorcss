// lib/cache.ts
var cache = {
  compMap: {
    "": {}
  },
  classNameCache: {}
};

// lib/device.ts
var _device;
var device = () => {
  if (_device) {
    return _device;
  }
  const ua = navigator.userAgent.toLocaleLowerCase();
  const android = /(?:android)/.test(ua);
  const firefox = /(?:firefox)/.test(ua);
  const chrome = /(?:chrome|crios)/.test(ua);
  const safari = /(safari)/.test(ua);
  const tablet = /(?:ipad|playbook)/.test(ua) || android && !/(?:mobile)/.test(ua) || firefox && /(?:tablet)/.test(ua);
  const ios = /(?:iphone)/.test(ua) && !tablet;
  const pc = !ios && !android;
  const phone = !pc;
  const wechat = phone && /(micromessenger|wechat)/.test(ua);
  _device = {
    android,
    firefox,
    chrome,
    tablet,
    ios,
    wechat,
    pc,
    phone,
    safari
  };
  return _device;
};

// lib/fixClassName.ts
function setCompAndName(fix, compList, val) {
  fix.comp = compList[val];
  if (fix.comp) {
    fix.compName = val;
  } else {
    fix.name = val;
  }
}
function setMedia(fix, val) {
  if (mediaList[val]) {
    fix.media = mediaList[val];
    fix.mediaName = val;
  } else if (device()[val] !== void 0) {
    fix.media = `@media screen and (min-width: ${device()[val] ? "0px" : "9999px"})`;
    fix.mediaName = val;
  }
}
var mediaList = {
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
  "in-xxl": "@media screen (max-width:9999px) and (min-width: 1535px)"
};
var fixCache = {};
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
function fixClassName(group, css) {
  const _key = group + "_$$_" + css;
  const old = fixCache[_key];
  if (old) {
    return old;
  }
  const out = {
    comp: void 0,
    compName: "",
    pesudo: "",
    pesudoName: "",
    media: "",
    mediaName: "",
    name: "",
    value: "",
    query: ""
  };
  if (!css || css[0] === "/" && css[1] === "/") {
    fixCache[_key] = out;
    return out;
  }
  const compList = cache.compMap[group] || {};
  const list = css.split(":");
  setMedia(out, list[0]);
  if (out.mediaName) {
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
  group = ""
}) => {
  if (!css) {
    return;
  }
  const _key = `^sty_${css}_${name}_${media}_${pesudo}_${group}`;
  if (cache.classNameCache[_key]) {
    return;
  }
  cache.classNameCache[_key] = true;
  const fix = fixClassName(group, css);
  let val = fix.value;
  if (!val) {
    return;
  }
  const last = val[val.length - 1];
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
  const _list = val.split("~");
  if (_list.length > 1) {
    val = " " + _list.map((v) => `"${v}"`).join(" ");
    val += ";";
  }
  val = val.replace(/calc\((.*?)\)/g, (item) => {
    item = item.replace(/(-|\+|\*|\/)/g, (v) => " " + v + " ");
    return item;
  });
  val = val.replace(/\|/g, " ");
  val = val.replace(/var\((.*?)\)/g, (v) => {
    return v.replace(/(var\(|\))/g, "");
  });
  val = val.replace(/--([a-zA-Z0-9_-]*)/g, (v) => `var(${v})`);
  val = val.replace(/\^\^\^/g, ",");
  const key = (name || css).replace(/(\:|#|\*|!|,|\.|>|<|@|~|%|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g, (v) => "\\" + v);
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

// lib/parserGroup.ts
var groupCache = {};
var parserGroup = (css) => {
  const old = groupCache[css];
  if (old) {
    return old;
  }
  const list = [];
  css = css.replace(/\n/g, " ");
  const groups = [];
  const _match = css.match(/\*(.\w?)\s/g);
  const groupMap = {};
  if (_match) {
    _match.forEach((v) => {
      if (v) {
        const _v = v.replace(/(\*|\s)/g, "");
        if (_v) {
          groups.push(_v);
          groupMap[_v] = true;
        }
      }
    });
  } else {
    list.push({group: "", cssItem: css});
    groupCache[css] = list;
    return list;
  }
  const reg = /\*(.*?)\s/g;
  const groupList = css.split(reg);
  groupList.forEach((v, i) => {
    v = v.trim();
    if (!v) {
      return;
    }
    const nextValue = groupList[i + 1];
    if (i === 0 && !groupMap[v]) {
      list.push({cssItem: v, group: ""});
    }
    if (groupMap[v]) {
      if (nextValue && !groupMap[nextValue]) {
        list.push({cssItem: nextValue.trim(), group: v});
      }
    }
  });
  groupCache[css] = list;
  return list;
};

// lib/parser.ts
var parser = (css, name = "", media = "", mediaName = "", pesudo = "", group = "") => {
  const key = `^parser_${css}_${name}_${media}_${mediaName}_${pesudo}`;
  if (cache.classNameCache[key]) {
    return css;
  }
  cache.classNameCache[key] = true;
  parserGroup(css).forEach(({cssItem, group: _group}) => {
    cssItem.split(" ").filter(Boolean).forEach((item) => {
      let g = _group;
      let fix = fixClassName(_group, item);
      if (!fix.comp) {
        fix = fixClassName("", item);
        g = "";
      }
      if (fix.comp) {
        const sub = fix.comp(fix.value.split(","));
        parser(sub, item, fix.media, fix.mediaName, fix.pesudo, g);
      } else {
        addStyle({
          css: item,
          name,
          media,
          mediaName,
          pesudo,
          group
        });
      }
    });
  });
  return css;
};

// lib/classGroup.ts
var lock = {};
var classGroup = (group, name, value) => {
  const key = `^group_${group}_${name}_${value}`;
  if (lock[key]) {
    return;
  }
  lock[key] = true;
  if (!cache.compMap[group]) {
    cache.compMap[group] = {};
  }
  cache.compMap[group][name] = (values) => {
    let css = value;
    values.forEach((v, i) => {
      css = css.replace(new RegExp(`(\\$${i + 1})`, "g"), v);
    });
    const last = values[values.length];
    const checkNextNum = (i) => {
      if (css.indexOf("$" + i) > -1) {
        css = css.replace(new RegExp(`(\\$${i + 1})`, "g"), last);
        checkNextNum(i + 1);
      }
    };
    checkNextNum(value.length + 1);
    let out = "";
    parserGroup(css).forEach(({cssItem, group: g}) => {
      cssItem.split(" ").forEach((v) => {
        let fix = fixClassName(g, v);
        if (!fix.comp) {
          fix = fixClassName(group, v);
          if (!fix.comp && group !== "" && g !== "") {
            fix = fixClassName("", v);
          }
        }
        if (fix.comp && fix.compName !== name) {
          const _v = fix.comp(fix.value.split(","));
          _v.split(" ").forEach((__v) => {
            out += [fix.query, fix.mediaName, fix.pesudoName, __v].filter(Boolean).join(":") + " ";
          });
        } else {
          out += v + " ";
        }
      });
    });
    return out;
  };
};

// lib/addGroup.ts
var addGroup = (groupName, html) => {
  if (!html) {
    return;
  }
  html = html.replace("\n", "");
  html = html.replace(/(\/\/\s)/g, "//");
  html.trim().split(";").forEach((item) => {
    let [name, ...values] = item.split(":");
    name = name.trim();
    if (name) {
      classGroup(groupName, name, values.join(":").trim());
    }
  });
};
var easeAddGroup = (groupName, html) => {
  if (!html) {
    addGroup("", groupName);
  } else {
    addGroup(groupName, html);
  }
};

// lib/observeClass.ts
var classSelector = "[class]";
var reset = () => {
  document.head.querySelectorAll("style[flavor-css]").forEach((e) => {
    e.remove();
  });
  cache.compMap = {};
  cache.classNameCache = {};
  document.querySelectorAll("[flavor]").forEach(regGroup);
  document.body.querySelectorAll(classSelector).forEach(regElement);
};
function regGroup(ele) {
  const groupName = ele.getAttribute("flavor");
  if (groupName === void 0 || groupName === null) {
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
  addGroup(groupName, html);
}
function regElement(ele) {
  if (!ele) {
    return;
  }
  if (ele.className && typeof ele.className === "string") {
    parser(ele.className);
  }
}
var _observer = () => {
  const onMutations = (mutationsList, ...args) => {
    const len = mutationsList.length;
    for (let i = 0; i < len; i++) {
      const mutation = mutationsList[i];
      if (mutation.type === "childList") {
        const ele = mutation.target;
        if (isHaveClosest && ele.__flavorIgnore && ele.closest("[flavor-ignore]")) {
          if (!ele.getAttribute("flavor-ignore")) {
            ele.__flavorIgnore = true;
            return;
          }
        }
        regGroup(ele);
        regElement(ele);
        if (mutation.addedNodes.length) {
          ele.querySelectorAll("[flavor]").forEach(regGroup);
          ele.querySelectorAll(classSelector).forEach(regElement);
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
    attributeFilter: ["class"],
    characterData: false,
    attributeOldValue: false,
    characterDataOldValue: false
  });
};
var lock2 = false;
var isHaveClosest = false;
var observeClass = () => {
  if (typeof window === "undefined" || typeof document === "undefined" || !window.location) {
    return;
  }
  if (lock2) {
    return;
  }
  if (!window.MutationObserver) {
    console.error("[flavorcss] Your Browser not supported MutationObserver");
    return;
  }
  if (!document.body) {
    requestAnimationFrame(observeClass);
    return;
  }
  document.querySelectorAll("[flavor]").forEach(regGroup);
  document.body.querySelectorAll(classSelector).forEach((ele) => {
    regElement(ele);
  });
  if (document.body.closest) {
    isHaveClosest = true;
  }
  _observer();
  lock2 = true;
};
observeClass();

// lib/index.ts
var flavorcss = {
  addStyle,
  device,
  parser,
  observeClass,
  addGroup: easeAddGroup,
  mediaList,
  cache,
  reset
};
window.flavorcss = flavorcss;
export {
  flavorcss
};
