import { parseClass } from "./parseClass";

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
          ele.querySelectorAll("[class]").forEach((e) => parseClass(e.className));
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

// 仅使用 MutationObserver
// const bindAttribute = (Target: HTMLElement | SVGSVGElement) => {
//   const setAttribute = (Target as any).prototype.setAttribute;
//   (Target as any).prototype.setAttribute = function (name: any, value: any) {
//     if (name === "class") {
//       if ((this as any).__flavorIgnore) {
//         //
//       } else if (this.closest("[flavor-ignore]")) {
//         (this as any).__flavorIgnore = true;
//       } else {
//         parseClass(value);
//       }
//     }
//     setAttribute.call(this, name, value);
//   };

//   Object.defineProperty((Target as any).prototype, "className", {
//     set: function (v: string) {
//       this.setAttribute("class", v);
//     },
//   });
// };

export function obserer() {
  // bindAttribute(HTMLElement as any);
  // bindAttribute(SVGSVGElement as any);

  window.addEventListener("load", () => {
    document.querySelectorAll("[class]").forEach((e) => parseClass(e.className));
    _observer();
  });
}
