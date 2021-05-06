import { Route } from "vanilla-route";
import { githubSvg } from "../svgs";

const headTitleCss = "pointer d:none sm:d:grid pc:center width:80px ";

export const Header = () => {
  const isDoc = /doc/.test(window.location.hash);
  const isExample = /example/.test(window.location.hash);
  const isHome = !isDoc && !isExample;

  const out = document.createElement("div");

  out.className = "w:1px h:--h";

  const content = document.createElement("section");
  content.className =
    "pos:fixed w:100% bg:--white z:9999 top:0px left:0px shadow:0px|1px|4px|hsla(0,0%,0%,0.1) h:--h";

  const contentBox = document.createElement("div");
  contentBox.className =
    "h:100% p:0px|--a6 g-cols:repeat(1,auto)|1fr sm:g-cols:repeat(4,auto)|1fr|auto gap:20px";

  const list = [
    () =>
      Object.assign(document.createElement("span"), {
        className:
          "pointer g-col pc:center fm:mono fw:900 fs:24px bgc:120deg,hsl(200,50%,50%),hsl(330,50%,20%)",
        onclick: () => Route.push("/"),
        textContent: "flavorcss",
      }),
    () =>
      Object.assign(document.createElement("span"), {
        className: headTitleCss + (isHome && "fw:800"),
        onclick: () => Route.push("/"),
        textContent: "Home",
      }),
    () =>
      Object.assign(document.createElement("span"), {
        className: headTitleCss + (isDoc && "fw:800"),
        onclick: () => Route.push("/doc"),
        textContent: "Document",
      }),
    () =>
      Object.assign(document.createElement("span"), {
        className: headTitleCss + (isExample && "fw:800"),
        onclick: () => Route.push("/example"),
        textContent: "Example",
      }),
    () => document.createElement("span"),
    () => {
      const out = document.createElement("div");
      out.className =
        "g-col pc:center pointer radius:6px ::hover:bg:hsl(--h,55%,40%) bg:hsl(--h,55%,45%) p:8px color:--primary :hover:shadow:0px|6px|10px|hsla(--h,55%,20%,0.2) tt:all|0.3s|--ease gap:14px :hover:tf:translateY(-1px)";
      out.onclick = () => window.open("https://github.com/ymzuiku/flavorcss");
      out.innerHTML = githubSvg;
      return out;
    },
  ].map((v) => v());

  contentBox.append(...list);

  out.append(content);
  content.append(contentBox);

  return out;
};
