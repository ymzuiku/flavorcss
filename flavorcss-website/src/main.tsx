import "flavorcss";
import "aoife";
import { App } from "./app";
import { Route } from "vanilla-route";
import { ICP } from "./components/ICP";

document.body.hidden = true;
document.body.append(
  Route({ url: "/", render: App }),
  Route({ url: "/doc", render: () => import("./doc") }),
  Route({ url: "/example", render: () => import("./example") }),
  ICP(),
);
setTimeout(() => {
  document.body.hidden = false;
}, 100);
