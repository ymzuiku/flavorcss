import useSSRLayoutEffect from "./useSSRLayoutEffect";
import { useState } from "react";

export default (nowUrl = "") => {
  const [pathname, setPathname] = useState(nowUrl);
  useSSRLayoutEffect(() => {
    if (!nowUrl) {
      setPathname(location.pathname);
    }
  }, []);
  return pathname;
};
