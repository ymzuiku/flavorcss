import { useEffect } from "react";

export default (href: string, rel = "stylesheet") => {
  useEffect(() => {
    if (!(window as any).__useScript) {
      (window as any).__useScript = {};
    }
    (window as any).__useScript[href] = true;
  }, []);

  if (
    typeof window !== "undefined" &&
    (window as any).__useScript &&
    (window as any).__useScript[href]
  ) {
    return null;
  }

  return <link rel={rel} href={href} />;
};
