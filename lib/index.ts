import { cache } from "./cache";
import { parser } from "./parser";
import { device } from "./device";
import { observeClass, reset } from "./observeClass";
import { addStyle } from "./addStyle";
import { easeAddGroup } from "./addGroup";
import { mediaList } from "./fixClassName";

export const flavorcss = {
  addStyle,
  device,
  parser,
  observeClass,
  addGroup: easeAddGroup,
  mediaList,
  cache,
  reset,
};

(window as any).flavorcss = flavorcss;
