import { Route } from "vanilla-route";
export function Card({
  h,
  info,
  title,
  button,
  url,
}: {
  h: number;
  title: string;
  info: string;
  button: string;
  url: string;
}) {
  const out = document.createElement("div");
  out.className = `p:--xl p:--lg gradient:155deg,hsl(${h},50%,50%),hsl(${
    h + 10
  },60%,45%) color:--white radius:--lg rows:auto|auto|--bar-height shadow:0px|--lg|--lg|hsla(160,50%,30%,0.15)`;
  out.append(
    ...[
      () =>
        Object.assign(document.createElement("h2"), {
          className: "fs:--h3 fw:500",
          textContent: title,
        }),
      () =>
        Object.assign(document.createElement("p"), {
          className: "fs:--h5 fw:300",
          textContent: info,
        }),
      () =>
        Object.assign(document.createElement("button"), {
          className: `time:0.2s,--ease bg:hsl(${
            h + 10
          },50%,40%) radius:--md mt:--md :hover:bg:hsl(${
            h + 10
          },50%,35%) fw:500`,
          textContent: button,
          onclick: () => {
            Route.push(url);
          },
        }),
    ].map((v) => v())
  );
  return out;
}
