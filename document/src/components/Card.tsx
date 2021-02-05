import { route } from "vanilla-route";
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
  return (
    <div
      class={`p:--xl p:--lg gradient:155deg,hsl(${h},50%,50%),hsl(${
        h + 10
      },60%,45%) color:--white radius:--lg rows:auto|auto|--bar-height shadow:0px|--lg|--lg|hsla(160,50%,30%,0.15)`}
    >
      <h2 class="fs:--h3 fw:500">{title}</h2>
      <p class="fs:--h5 fw:300">{info}</p>
      <button
        class={`time:0.2s,--ease bg:hsl(${
          h + 10
        },50%,40%) radius:--md mt:--md hover:bg:hsl(${h + 10},50%,35%) fw:500`}
        onclick={() => {
          route.push(url, true);
        }}
      >
        {button}
      </button>
    </div>
  );
}
