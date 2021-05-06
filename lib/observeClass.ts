import { addCss } from "./addCss";
import { addComponents } from "./addComponents";

const classSelector = "[class]";

function regComponents(ele: HTMLElement) {
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
        regElement(ele);

        if (mutation.addedNodes.length) {
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

window.addEventListener("load", () => {
  document.querySelectorAll("[data-flavor]").forEach(regComponents as any);
  document.body.querySelectorAll(classSelector).forEach((ele) => {
    regElement(ele as any);
  });

  _observer();
});
