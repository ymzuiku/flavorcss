import { cache } from "./cache";
import { parser } from "./parser";
import { os } from "./os";
import { observeClass, reset } from "./observeClass";
import { addStyle } from "./addStyle";
import { easeAddGroup } from "./addGroup";
import { mediaList } from "./fixClassName";

export const flavorcss = {
  addStyle,
  os,
  parser,
  observeClass,
  addGroup: easeAddGroup,
  mediaList,
  cache,
  reset,
};

(window as any).flavorcss = flavorcss;
