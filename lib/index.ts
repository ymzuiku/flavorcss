import { cache } from "./cache";
import { parser } from "./parser";
import { device } from "./device";
import { observeClass, reset } from "./observeClass";
import { classGroup } from "./classGroup";
import { mediaList, pesudoList } from "./fixClassName";

export const flavorcss = {
  device,
  parser,
  observeClass,
  classGroup,
  mediaList,
  pesudoList,
  cache,
  reset,
};

(window as any).flavorcss = flavorcss;
