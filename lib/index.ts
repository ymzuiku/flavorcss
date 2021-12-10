import { obserer } from "./observer";
import { parseClass } from "./parseClass";

// eslint-disable-next-line
(window as any).flavorcss = obserer;

export { obserer, parseClass };
