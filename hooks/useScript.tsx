import { useEffect } from "react";

export default (src: string) => {
  useEffect(() => {
    if (!(window as any).__useScript) {
      (window as any).__useScript = {};
    }
    (window as any).__useScript[src] = true;
  }, []);

  if (
    typeof window !== "undefined" &&
    (window as any).__useScript &&
    (window as any).__useScript[src]
  ) {
    return null;
  }

  return <script  src={src}></script>;
};
