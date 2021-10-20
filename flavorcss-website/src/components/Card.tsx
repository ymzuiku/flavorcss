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
  return (
    <div
      class={`display:grid padding:--xl background-image:linear-gradient(155deg,hsl(${h},50%,50%),hsl(${
        h + 10
      },60%,45%)) color:--white border-radius:--lg grid-template-rows:auto|auto|--bar-height box-shadow:0px|--lg|--lg|hsla(160,50%,30%,0.15)`}
    >
      <h2 class="font-size:--h3 font-weight:500">{title}</h2>
      <p class="font-size:--h5 font-weight:300">{info}</p>
      <button
        class={`time:0.2s,--ease background:hsl(${
          h + 10
        },50%,40%) border-radius:--md margin-top:--md hover:background:hsl(${h + 10},50%,35%) fw:500`}
        onclick={() => {
          Route.push(url);
        }}
      >
        {button}
      </button>
    </div>
  );
}
