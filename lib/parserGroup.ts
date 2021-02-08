const groupCache = {} as any;

export const parserGroup = (css: string) => {
  const old = groupCache[css];
  if (old) {
    return old as { cssItem: string; group: string }[];
  }
  const list = [] as { cssItem: string; group: string }[];
  css = css.replace(/\n/g, " ");

  const groups = [] as string[];
  const _match = css.match(/\*(.\w?)\s/g);
  const groupMap = {} as any;
  if (_match) {
    _match.forEach((v) => {
      if (v) {
        const _v = v.replace(/(\*|\s)/g, "");
        if (_v) {
          groups.push(_v);
          groupMap[_v] = true;
        }
      }
    });
  } else {
    list.push({ group: "", cssItem: css });
    groupCache[css] = list;
    return list;
  }

  const reg = /\*(.*?)\s/g;
  const groupList = css.split(reg);
  groupList.forEach((v, i) => {
    v = v.trim();
    if (!v) {
      return;
    }
    const nextValue = groupList[i + 1];
    if (i === 0 && !groupMap[v]) {
      list.push({ cssItem: v, group: "" });
    }
    if (groupMap[v]) {
      if (nextValue && !groupMap[nextValue]) {
        list.push({ cssItem: nextValue.trim(), group: v });
      }
    }
  });

  groupCache[css] = list;

  return list;
};
