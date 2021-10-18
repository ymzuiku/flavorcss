import { addCss } from "./addCss";
import { os } from "./os";
import { addStyle } from "./addStyle";
import { addComponents } from "./addComponents";
import { mediaList } from "./parser";
import { observerSetting } from "./observeClass";
import "./observeClass";

export const flavorcss = {
  addStyle,
  os,
  addCss,
  addComponents,
  mediaList,
  observerSetting,
};

if (typeof window !== undefined) {
  (window as any).flavorcss = flavorcss;
}
