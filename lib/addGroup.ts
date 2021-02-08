import { classGroup } from "./classGroup";

export const addGroup = (groupName: string, html: string) => {
  if (!html) {
    return;
  }
  html = html.replace("\n", "");
  // 兼容注释带空格
  html = html.replace(/(\/\/\s)/g, "//");
  html
    .trim()
    .split(";")
    .forEach((item) => {
      let [name, ...values] = item.split(":");
      name = name.trim();
      if (name) {
        classGroup(groupName, name, values.join(":").trim());
      }
    });
};

export const easeAddGroup = (groupName: string, html?: string) => {
  if (!html) {
    addGroup("", groupName);
  } else {
    addGroup(groupName, html);
  }
};
