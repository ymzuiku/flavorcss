import { parser } from "./parser";
import { device } from "./device";
import { observeClass } from "./observeClass";
import { classGroup } from "./classGroup";
import { mediaList, pesudoList } from "./fixClassName";
import { reset } from "./cache";

export const flavorcss = {
  device,
  parser,
  observeClass,
  classGroup,
  mediaList,
  pesudoList,
  reset,
};

(window as any).flavorcss = flavorcss;
