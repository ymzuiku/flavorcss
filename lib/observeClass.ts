import { addCss } from "./addCss";
import { addComponents } from "./addComponents";

export const observerSetting = {
  ignoreObserveComponent: false,
};

function regComponents(ele: HTMLElement) {
  if (!ele.hasAttribute("flavor-css")) {
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

  addComponents(html);
}

function regElement(ele: HTMLElement) {
  if (!ele) {
    return;
  }

  if (ele.className && typeof ele.className === "string") {
    addCss(ele.className);
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
    characterDataOldValue: false,
  });
};

window.addEventListener("load", () => {
  document.querySelectorAll("[flavor-css]").forEach(regComponents);
  document.querySelectorAll("[class]").forEach(regElement);

  _observer();
});
