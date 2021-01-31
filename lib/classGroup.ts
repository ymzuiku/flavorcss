import { compMap } from "./cache";
import { fixClassName } from "./fixClassName";
export const groupList = {} as { [key: string]: string };

export const classGroup = (group: any, name: string, value: string) => {
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
      const { comp, value } = fixClassName(group, v);
      out += (comp ? comp(value.split(",")) : v) + " ";
    });
    return out;
  };
};
