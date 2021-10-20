import { parseClass } from "./parser";

const _observer = () => {
  // 页面内容变更监听 recordSetAttr
  const onMutations = (mutationsList: any, ...args: any[]) => {
    const len = mutationsList.length;
    for (let i = 0; i < len; i++) {
      const mutation = mutationsList[i];
      if (mutation.type === "childList") {
        const ele = mutation.target as HTMLElement;
        if ((ele as any).__flavorIgnore || ele.closest("[flavor-ignore]")) {
          if (!ele.getAttribute("flavor-ignore")) {
            (ele as any).__flavorIgnore = true;
            return;
          }
        }
        if (ele.className) {
          parseClass(ele.className);
        }

        if (mutation.addedNodes.length) {
          ele.querySelectorAll("[class]").forEach((e) =>
            parseClass(e.className)
          );
        }
      } else if (mutation.type === "attributes" && mutation.target.className) {
        parseClass(mutation.target.className);
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

export function obserer() {
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      document.querySelectorAll("[class]").forEach((e) =>
        parseClass(e.className)
      );

      _observer();
    });
  }
}
