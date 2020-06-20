import { useRef } from "react";
import useSSRLayoutEffect from "./useSSRLayoutEffect";

const cache = {} as any;

export default function useScrollTopRef(key: string) {
  const ref = useRef<HTMLElement>();
  useSSRLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = cache[key] || 0;
      ref.current.onscroll = (e) => {
        cache[key] = (e as any).target.scrollTop;
      };
    }
  }, [ref.current]);

  return ref;
}
