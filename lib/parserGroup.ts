const groupCache = {} as any;

export const parserGroup = (css: string) => {
  const old = groupCache[css];
  if (old) {
    return old as { cssItem: string; group: string }[];
  }
  const list = [] as { cssItem: string; group: string }[];
  css = css.replace(/\n/g, " ");

  const groups = [] as string[];
  const _groups = css.match(/\*(.*?)\s/g);
  const groupMap = {} as any;
  if (_groups) {
    _groups.forEach((v) => {
      if (v) {
        const _v = v.replace(/(\*|\s)/g, "");
        groups.push(_v);
        groupMap[_v] = true;
      }
    });
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
