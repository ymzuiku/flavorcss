import { addCss } from "./addCss";
import { os } from "./os";
import { addStyle } from "./addStyle";
import { addComponents } from "./addComponents";
import { mediaList } from "./parser";
import "./observeClass";

export const flavorcss = {
  addStyle,
  os,
  addCss,
  addComponents,
  mediaList,
};

(window as any).flavorcss = flavorcss;
