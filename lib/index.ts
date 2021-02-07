import { cache } from "./cache";
import { parser } from "./parser";
import { device } from "./device";
import { observeClass, reset } from "./observeClass";
import { addStyle } from "./addStyle";
import { addGroup } from "./addGroup";
import { mediaList, pesudoList } from "./fixClassName";

export const flavorcss = {
  addStyle,
  device,
  parser,
  observeClass,
  addGroup,
  mediaList,
  pesudoList,
  cache,
  reset,
};

(window as any).flavorcss = flavorcss;
