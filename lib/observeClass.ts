import { classGroup } from "./classGroup";
import { parser } from "./parser";

let isHaveFlavor = 0;

function regGroup(ele: HTMLElement) {
  const groupName = ele.getAttribute("flavor-apply") || "";

  if (groupName && isHaveFlavor >= 0) {
    isHaveFlavor = 1;
  }
  if (ele.innerHTML) {
    ele.innerHTML.split("\n").forEach((item) => {
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

  if (isHaveFlavor <= 0) {
    parser(ele.className, "");
    return;
  }

  if ((ele as any).__flavor_group !== void 0) {
    parser(ele.className, (ele as any).__flavor_group);
    return;
  }
  const group = ele.closest("[flavor]");
  if (group) {
    const attr = group.getAttribute("flavor") || "";
    (ele as any).__flavor_group = attr;
    ele.setAttribute("flavor-sub", attr);
    parser(ele.className, attr);
  } else {
    parser(ele.className, "");
  }
}

const _observer = () => {
  // 页面内容变更监听 recordSetAttr
  const onMutations = (mutationsList: any) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        regGroup(mutation.target);
        regElement(mutation.target);
        mutation.target.querySelectorAll("[flavor-apply]").forEach(regGroup);
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

  if (!document.body.closest) {
    isHaveFlavor = -1;
  }

  document.querySelectorAll("[flavor-apply]").forEach(regGroup as any);
  document.body.querySelectorAll("[class]").forEach(regElement as any);
  _observer();

  lock = true;
};

observeClass();
