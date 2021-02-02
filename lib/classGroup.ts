import { compMap } from "./cache";
import { fixClassName } from "./fixClassName";
import { parserGroup } from "./parserGroup";
export const groupList = {} as { [key: string]: string };

const lock = {} as any;

export const classGroup = (group: any, name: string, value: string) => {
  const key = `^group_${group}_${name}_${value}`;
  if (lock[key]) {
    return;
  }
  lock[key] = true;
  if (!compMap[group]) {
    compMap[group] = {};
  }
  compMap[group][name] = (values: string[]) => {
    let css = value;
    values.forEach((v, i) => {
      css = css.replace("$" + (i + 1), v);
    });
    let out = "";
    parserGroup(css).forEach(({ cssItem, group: g }) => {
      cssItem.split(" ").forEach((v) => {
        // 若css中还有其他 comp，则递归查找，拼接到 out 中
        // 兼容组件名称中带有参数
        // 若内部有分组，优先使用 g， 否则使用外部分组
        const fix = fixClassName(g || group, v);
        if (fix.comp as any) {
          const _list = [] as string[];
          v.split(":").forEach((_v) => {
            if (_v === fix.compName) {
              _list.push(fix.comp(fix.value.split(",")));
            } else if (_v === fix.value) {
            } else {
              _list.push(_v);
            }
          });
          out += _list.join(":") + " ";
        } else {
          out += v + " ";
        }
      });
    });
    return out;
  };
};
