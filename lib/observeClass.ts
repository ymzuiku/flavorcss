import { classGroup } from "./classGroup";
import { parser } from "./parser";

function regGroup(ele: HTMLTemplateElement) {
  const groupName = ele.getAttribute("flavor-group") || "";
  let html = "";
  if (ele.tagName === "TEMPLATE") {
    const content = ele.content.cloneNode(true);
    if (content) {
      html = content.textContent!;
    }
  } else {
    html = ele.textContent!;
  }

  if (html) {
    html
      .trim()
      .split("\n")
      .forEach((item) => {
        let [name, ...values] = item.split(":");
        name = name.trim();
        if (name) {
          classGroup(groupName, name, values.join(":").trim());
        }
      });
  }
}

function regElement(ele: HTMLElement) {
  if (!ele) {
    return;
  }

  parser(ele.className);
}

const _observer = () => {
  // 页面内容变更监听 recordSetAttr
  const onMutations = (mutationsList: any) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        regGroup(mutation.target);
        regElement(mutation.target);
        mutation.target.querySelectorAll("[flavor-group]").forEach(regGroup);
        mutation.target.querySelectorAll("[class]").forEach(regElement);
      } else if (mutation.type === "attributes") {
        const ele = mutation.target;
        regElement(ele);
      }
    }
  };

  const observer = new MutationObserver(onMutations);
  observer.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ["class"],
  });
};

let lock = false;
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
    console.error("[flavorcss] Your Browser not supported MutationObserver");
    return;
  }
  if (!document.body) {
    requestAnimationFrame(observeClass);
    return;
  }

  document.querySelectorAll("[flavor-group]").forEach(regGroup as any);
  document.body.querySelectorAll("[class]").forEach(regElement as any);
  _observer();

  lock = true;
};

observeClass();
