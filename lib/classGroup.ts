import { compMap } from "./cache";
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
      // 暂时不支持组件嵌套组件
      // 若css中还有其他 comp，则递归查找，拼接到 out 中
      // 兼容组件名称中带有参数
      // const fix = fixClassName(group, v);
      // if (fix.comp as any) {
      //   const _list = [] as string[];
      //   v.split(":").forEach((_v) => {
      //     if (_v === fix.compName) {
      //       _list.push(fix.comp(fix.value.split(",")));
      //     } else if (_v === fix.value) {
      //     } else {
      //       _list.push(_v);
      //     }
      //   });
      //   out += _list.join(":") + " ";
      // } else {
      //   out += v + " ";
      // }
      out += v + " ";
    });
    return out;
  };
};
