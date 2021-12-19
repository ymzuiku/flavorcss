import { flavorObserver } from "./observer";
import { flavor } from "./parseClass";

// eslint-disable-next-line
(window as any).flavorObserver = flavorObserver;
(window as any).flavor = flavor;
module.exports = {
  flavorObserver,
  flavor,
};
