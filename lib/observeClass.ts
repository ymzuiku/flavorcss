import { parser } from "./parser";
import { cache } from "./cache";
import { addGroup } from "./addGroup";

const classSelector = "[class]";

export const reset = () => {
  document.head.querySelectorAll("style[flavor-css]").forEach((e) => {
    e.remove();
  });
  cache.compMap = {};
  cache.classNameCache = {};
  document.querySelectorAll("[flavor]").forEach(regGroup as any);
  document.body.querySelectorAll(classSelector).forEach(regElement as any);
};

function regGroup(ele: HTMLElement) {
  const groupName = ele.getAttribute("flavor");
  if (groupName === void 0 || groupName === null) {
    return;
  }
  let html = "";
  if (ele.tagName === "TEMPLATE") {
    const content = (ele as HTMLTemplateElement).content.cloneNode(true);
    if (content) {
      html = content.textContent!;
    }
  } else {
    html = ele.textContent!;
  }

  addGroup(groupName, html);
}

function regElement(ele: HTMLElement) {
  if (!ele) {
    return;
  }

  if (ele.className && typeof ele.className === "string") {
    parser(ele.className);
  }
}

// let weakCache: WeakSet<any>;

const _observer = () => {
  // 页面内容变更监听 recordSetAttr
  const onMutations = (mutationsList: any, ...args: any[]) => {
    const len = mutationsList.length;
    for (let i = 0; i < len; i++) {
      const mutation = mutationsList[i];
      if (mutation.type === "childList") {
        const ele = mutation.target as HTMLElement;
        if ((ele as any).__flavorIgnore && ele.closest("[flavor-ignore]")) {
          if (!ele.getAttribute("flavor-ignore")) {
            (ele as any).__flavorIgnore = true;
            return;
          }
        }
        regGroup(ele);
        regElement(ele);

        if (mutation.addedNodes.length) {
          ele.querySelectorAll("[flavor]").forEach(regGroup as any);
          ele.querySelectorAll(classSelector).forEach(regElement as any);
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
    characterDataOldValue: false,
  });
};

// window.MutationObserver = null;

let lock = false;
let isHaveClosest = false;
export const observeClass = () => {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    !window.location
  ) {
    return;
  }
  if (lock) {
    return;
  }

  if (!window.MutationObserver) {
    // polyfill
    // import("./MutationObserver").then(() => {
    //   observeClass();
    // });
    console.error("[flavorcss] Your Browser not supported MutationObserver");
    return;
  }
  if (!document.body) {
    requestAnimationFrame(observeClass);
    return;
  }
  document.querySelectorAll("[flavor]").forEach(regGroup as any);
  document.body.querySelectorAll(classSelector).forEach((ele) => {
    regElement(ele as any);
  });
  // if (window.WeakSet) {
  //   weakCache = new WeakSet();
  // }
  _observer();

  lock = true;
};

observeClass();
