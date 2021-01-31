import { classNameCache, compMap } from "./cache";
import { addStyle } from "./addStyle";
import { fixClassName } from "./fixClassName";

export const parser = (
  css: string,
  group = "",
  name = "",
  media = "",
  pesudo = "",
  query = ""
) => {
  const key = `^parser_${css}_${name}_${media}_${pesudo}_${group}`;
  if (classNameCache[key]) {
    return css;
  }

  classNameCache[key] = true;

  css
    .split(" ")
    .filter(Boolean)
    .forEach((item) => {
      // 获取是否有注册的 comp
      const { comp, value, media: m, pesudo: p, query: q } = fixClassName(
        group,
        item
      );

      if (comp) {
        // 若有，解析伪类和名称，重新使用 cssin 创建
        const sub = comp(value.split(","));
        // 这里注意，递归的name由于需要和 className 中的保持一致，所以使用item
        // 也就是说这个行为仅仅是拿到组件的 string：sub、及组件上的 media 和 pesudo
        parser(sub, group, item, m, p, q);
      } else {
        addStyle({
          css: item,
          name,
          media,
          pesudo,
          query,
          group,
        });
      }
    });

  return css;
};
