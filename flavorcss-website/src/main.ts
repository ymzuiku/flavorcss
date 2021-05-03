import "aoife";
import { App } from "./app";
import { Route } from "vanilla-route";

document.body.append(
  Route({ url: "/", render: App }),
  Route({ url: "/doc", render: () => import("./doc") }),
  Route({ url: "/doc", render: () => import("./example") })
);
