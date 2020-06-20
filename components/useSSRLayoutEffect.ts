import { useLayoutEffect, DependencyList, EffectCallback } from "react";

export default (effect: EffectCallback, deps?: DependencyList) => {
  if (typeof document !== "undefined") {
    useLayoutEffect(effect, deps);
  }
};
