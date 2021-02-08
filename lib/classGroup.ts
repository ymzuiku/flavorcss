import { cache } from "./cache";
import { fixClassName } from "./fixClassName";
import { parserGroup } from "./parserGroup";

const lock = {} as any;

export const classGroup = (group: any, name: string, value: string) => {
  const key = `^group_${group}_${name}_${value}`;
  if (lock[key]) {
    return;
  }

  lock[key] = true;
  if (!cache.compMap[group]) {
    cache.compMap[group] = {};
  }
  cache.compMap[group][name] = (values: string[]) => {
    let css = value;

    values.forEach((v, i) => {
      css = css.replace(new RegExp(`(\\$${i + 1})`, "g"), v);
    });
    const last = values[values.length];

    const checkNextNum = (i: number) => {
      if (css.indexOf("$" + i) > -1) {
        css = css.replace(new RegExp(`(\\$${i + 1})`, "g"), last);
        checkNextNum(i + 1);
      }
    };
    checkNextNum(value.length + 1);

    let out = "";
    parserGroup(css).forEach(({ cssItem, group: g }) => {
      cssItem.split(" ").forEach((v) => {
        // 若css中还有其他 comp，则递归查找，拼接到 out 中
        // 兼容组件名称中带有参数
        // 若内部有分组，优先使用 g， 否则使用外部分组

        let fix = fixClassName(g, v);
        if (!fix.comp) {
          fix = fixClassName(group, v);
          if (!fix.comp && group !== "" && g !== "") {
            fix = fixClassName("", v);
          }
        }
        // fix.compName !== name 目的防止 color:red 的值和 compName 一致，导致无限循环
        if ((fix.comp as any) && fix.compName !== name) {
          const _v = fix.comp(fix.value.split(","));
          _v.split(" ").forEach((__v) => {
            out +=
              [fix.query, fix.mediaName, fix.pesudoName, __v]
                .filter(Boolean)
                .join(":") + " ";
          });
        } else {
          out += v + " ";
        }
      });
    });
    return out;
  };
};
