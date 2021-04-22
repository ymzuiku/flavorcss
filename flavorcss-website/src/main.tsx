import "aoife";
import { App } from "./app";
import { route } from "vanilla-route";

route.use("/", App);
route.use("/doc", () => import("./doc"));
route.use("/example", () => import("./example"));

document.body.append(route.target);

route.render();
