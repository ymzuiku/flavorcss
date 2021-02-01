import { compMap } from "./cache";
import { fixClassName } from "./fixClassName";
import { parser } from "./parser";
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
    css.split(" ").forEach((v) => {
      // 若css中还有其他 comp，则递归查找，拼接到 out 中
      // 兼容组件名称中带有参数
      const fix = fixClassName(group, v);
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
        // console.log(_list, "2222");
        out += _list.join(":") + " ";
      } else {
        out += v + " ";
      }
      // out += (comp ? comp(value.split(",")) : v) + " ";
    });
    console.log(out);
    return out;
  };
};
