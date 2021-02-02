import { classNameCache } from "./cache";
import { addStyle } from "./addStyle";
import { fixClassName } from "./fixClassName";

export const parser = (
  css: string,
  name = "",
  media = "",
  pesudo = "",
  group = ""
) => {
  const key = `^parser_${css}_${name}_${media}_${pesudo}`;
  if (classNameCache[key]) {
    return css;
  }

  classNameCache[key] = true;

  const _groups = css.match(/\[(.*?)\]/g);
  const groups = [] as string[];
  if (_groups) {
    _groups.forEach((v) => {
      if (v) {
        groups.push(v.replace(/(\[|\])/g, ""));
      }
    });
  }

  const reg = /\[(.*?)\]/g;
  const groupList = css.split(reg);
  const realList = [] as string[];
  groupList.forEach((v) => {
    v = v.trim();
    if (v && groups.indexOf(v) < 0) {
      realList.push(v);
    }
  });

  realList.forEach((_css, i) => {
    _css = _css.trim();
    _css
      .split(" ")
      .filter(Boolean)
      .forEach((item) => {
        // 获取是否有注册的 comp
        const { comp, value, media: m, pesudo: p } = fixClassName(
          groups[i],
          item
        );

        if (comp) {
          // 若有，解析伪类和名称，重新使用 cssin 创建
          const sub = comp(value.split(","));
          // 这里注意，递归的name由于需要和 className 中的保持一致，所以使用item
          // 也就是说这个行为仅仅是拿到组件的 string：sub、及组件上的 media 和 pesudo
          parser(sub, item, m, p, groups[i]);
        } else {
          addStyle({
            css: item,
            name,
            media,
            pesudo,
            group,
          });
        }
      });
  });

  return css;
};
