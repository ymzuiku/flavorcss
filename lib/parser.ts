import { classNameCache } from "./cache";
import { addStyle } from "./addStyle";
import { fixClassName } from "./fixClassName";
import { parserGroup } from "./parserGroup";

export const parser = (
  css: string,
  name = "",
  media = "",
  mediaName = "",
  pesudo = "",
  group = ""
) => {
  const key = `^parser_${css}_${name}_${media}_${mediaName}_${pesudo}`;
  if (classNameCache[key]) {
    return css;
  }

  classNameCache[key] = true;

  parserGroup(css).forEach(({ cssItem, group: _group }) => {
    cssItem
      .split(" ")
      .filter(Boolean)
      .forEach((item) => {
        // 获取是否有注册的 comp
        const {
          comp,
          value,
          media: _media,
          mediaName: _mediaName,
          pesudo: _pesudo,
        } = fixClassName(_group, item);

        if (comp) {
          // 若有，解析伪类和名称，重新使用 cssin 创建
          const sub = comp(value.split(","));
          // 这里注意，递归的name由于需要和 className 中的保持一致，所以使用item
          // 也就是说这个行为仅仅是拿到组件的 string：sub、及组件上的 media 和 pesudo
          parser(sub, item, _media, _mediaName, _pesudo, _group);
        } else {
          addStyle({
            css: item,
            name,
            media,
            mediaName,
            pesudo,
            group,
          });
        }
      });
  });

  return css;
};
