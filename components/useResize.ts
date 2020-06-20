import { useRef, useState, useEffect, MutableRefObject } from "react";

export default (): [
  MutableRefObject<HTMLElement>,
  { w: number; h: number }
] => {
  const box = useRef<HTMLElement>();
  const [wh, setWH] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const resize = () => {
      setWH({ w: box.current.offsetWidth, h: box.current.offsetHeight });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return [box, wh];
};
