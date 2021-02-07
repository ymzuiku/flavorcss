import { classGroup } from "./classGroup";

export const addGroup = (groupName: string, html: string) => {
  if (!html) {
    return;
  }
  html = html.replace("\n", "");
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
