let css = "";
const unit = ["auto", "none", "px", "vw", "vh"];
const scUnit = ["sm", "md", "lg", "xl"];
const fsUnit = [
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
];
css += `
adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
blockquote,dl,dd,h1,h2,h3,h4,h5,h6,figure,p,pre {
  margin: 0;
}
h1,h2,h3,h4,h5,h6 {
  font-size: inherit;
  font-weight: inherit;
}
ol,ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
img,svg,video,canvas,audio,iframe,embed,object {
  display: block;
  vertical-align: middle;
}
img, image {
  object-fit: cover;
  object-position: 50% 50%;
}
*,
*::before,
*::after {
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}
:root {
  --sans:system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --serif:Georgia, Cambria, "Times New Roman", Times, serif;
  --mono:Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
body {font-size:16px;padding:0px;margin:0px;font-family: var(--sans);}
* {box-sizing: border-box; outline:0;-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}
.sans	{font-family: var(--sans)}
.serif {font-family: var(--serif)}
.mono	{font-family: var(--mono)}
.transform {
  --move-x: 0; --move-y: 0; --rotate: 0; --skew-x: 0; --skew-y: 0; --scale-x: 1; --scale-y: 1;
  transform: translateX(var(--move-x)) translateY(var(--move-y)) rotate(var(--rotate)) skewX(var(--skew-x)) skewY(var(--skew-y)) scaleX(var(--scale-x)) scaleY(var(--scale-y));
}
.smooth { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.smooth-auto { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }
.appearance-none {appearance:none;}
.outline-none {outline:none}
@keyframes fbc-spin { 0% {transform: rotate(0deg);} 100% {transform: rotate(359deg);}}
`;

// details
for (let x = 0; x <= 4; x++) {
  for (let y = 0; y <= 4; y++) {
    css += `.orign-${x * 25}-${y * 25}{transform-orign:${x * 25}% ${y * 25}%}`;
  }
}

const fm = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  between: "flex-between",
  around: "flex-around",
  auto: "auto",
  baseline: "baseline",
} as any;

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "indigo",
  "purple",
  "pink",
];

let root = "";
const l1 = 40;
const l2 = l1 + 22;

// value list
function vl(fn: (i: number) => any) {
  for (let i = 1; i <= l1; i++) {
    fn(i);
  }
  for (let i = l1; i <= l2; i++) {
    fn((i - l1) * 20 + 60);
  }
}
root += `--a-0: 0rem;`;
vl((i) => {
  root += `--a-${i}: ${i / 16}rem;`;
});

root += `--b-0: 0%`;
for (let i = 1; i <= 12; i++) {
  root += `--b-${i}: ${(100 * i) / 12}%; `;
}

css += `:root{${root}}`;

let max = "";
let min = "";
let css2 = "";
let min2 = "";
let max2 = "";

const mknow = (n: string, v: string) => {
  css += `.${n}{${v}} `;
  max += `.sm\\:${n}{${v}}`;
  min += `.lg\\:${n}{${v}}`;
};

const mkout = (n: string, v: string) => {
  min2 += `.hover\\:${n}:hover{${v}}`;
  min2 += `.group:hover .group\\:hover\\:${n}{${v}}`;
  ["focus", "active"].forEach((h) => {
    css2 += `.${h}\\:${n}:${h}{${v}} `;
    css2 += `.group:${h} .group\\:${h}\\:${n}{${v}} `;
    max2 += `.sm\\:${h}\\:${n}:${h}{${v}}`;
    min2 += `.lg\\:${h}\\:${n}:${h}{${v}}`;
    max2 += `.group:${h} .group\\:sm\\:${h}\\:${n}{${v}}`;
    min2 += `.group:${h} .group\\:lg\\:${h}\\:${n}{${v}}`;
  });
};

function start(mk: any, isFirst: boolean) {
  // animation
  vl((i) => {
    mk(`move-x-${i}`, `--move-x:var(--a-${i})`);
    mk(`move-y-${i}`, `--move-y:var(--a-${i})`);
    mk(`move-x--${i}`, `--move-x:calc(0px - var(--a-${i}))`);
    mk(`move-y--${i}`, `--move-y:calc(0px - var(--a-${i}))`);
  });

  for (let i = 0; i <= 12; i++) {
    mk(`move-x-${i}\\/12`, `--move-x:var(--b-${i});`);
    mk(`move-y-${i}\\/12`, `--move-y:var(--b-${i})`);
    mk(`move-x--${i}\\/12`, `--move-x:calc(0px - var(--b-${i}));`);
    mk(`move-y--${i}\\/12`, `--move-y:calc(0px - var(--b-${i}))`);
  }

  for (let i = 0; i <= 100; i++) {
    const a = i ? i / 100 : 0;
    mk(`scale-${i}`, `--scale-x:${a};--scale-y:${a}`);
    mk(`scale-x-${i}`, `--scale-x: ${a}`);
    mk(`scale-y-${i}`, `--scale-y: ${a}`);
    mk(`scale-x--${i}`, `--scale-x: -${a}`);
    mk(`scale-y--${i}`, `--scale-y: -${a}`);
  }

  for (let i = 0; i <= 36; i++) {
    mk(`rotate-${i * 10}`, `--rotate:${i * 10}deg`);
    mk(`rotate--${i * 10}`, `--rotate:-${i * 10}deg`);
  }

  for (let i = 0; i <= 10; i++) {
    mk(`skew-x-${i}0`, `--skew-x:${i * 10}deg`);
    mk(`skew-y-${i}0`, `--skew-y:${i * 10}deg`);
  }

  mk("container", "width: 100%");
  if (isFirst) {
    css += `@media screen and (max-width: 640px) {.container{max-width:640px}}`;
  }
  mk("border-box", "box-sizing: border-box");
  mk("content-box", "box-sizing: content-box");

  ["right", "left", "none", "both"].forEach((v) => {
    mk(`float-${v}`, `float: ${v}`);
    mk(`clear-${v}`, `clear: ${v}`);
  });

  ["contain", "cover", "fill", "none", "scale-down"].forEach((v) => {
    mk(`object-${v}`, `object-fit: ${v}`);
  });

  [
    "auto",
    "default",
    "pointer",
    "pointer",
    "text",
    "move",
    "not-allowed",
  ].forEach((v) => {
    mk(`cursor-${v}`, `cursor: ${v}`);
  });

  for (let x = 0; x <= 4; x++) {
    for (let y = 0; y <= 4; y++) {
      mk(`bg-${x}-${y}`, `background-position:${x}% ${y}%`);
      mk(`object-${x}-${y}`, `object-position:${x}% ${y}%`);
      mk(`transform-${x}-${y}`, `transform-position:${x}% ${y}%`);
    }
  }

  ["repeat", "no-repeat", "repeat-x", "repeat-y", "round", "space"].forEach(
    (v) => {
      mk(`bg-${v}`, `background-repeat:${v}`);
    }
  );

  ["auto", "cover", "contain"].forEach((v) => {
    mk(`bg-${v}`, `background-size:${v}`);
  });

  ["auto", "hidden", "visible", "scroll", "auto"].forEach((v) => {
    mk(`overflow-${v}`, `overflow:${v}`);
  });

  ["none", "auto"].forEach((v) => {
    mk(`events-${v}`, `pointer-events:${v}`);
  });

  ["none", "auto", "text", "all"].forEach((v) => {
    mk(`select-${v}`, `user-select:${v}`);
  });

  mk("fill-current", "fill: currentColor");
  mk("stroke-current", "stroke: currentColor");

  [
    ["none", "none"],
    ["both", "both"],
    ["x", "vertical"],
    ["y", "horizontal"],
  ].forEach((v) => {
    mk(`resize-${v[0]}`, `resize:${v[1]}`);
  });

  [
    ["x", "auto"],
    ["y", "auto"],
    ["x", "hidden"],
    ["y", "hidden"],
    ["x", "visible"],
    ["y", "visible"],
    ["x", "scroll"],
    ["y", "scroll"],
  ].forEach((v) => {
    mk(`overflow-${v[0]}-${v[1]}`, `overflow-${v[0]}:${v[1]}`);
  });

  mk("scroll-touch", "	-webkit-overflow-scrolling:touch");
  mk("scroll-auto", "	-webkit-overflow-scrolling:auto");

  ["static", "fixed", "absolute", "relative", "sticky"].forEach((v) => {
    mk(`${v}`, `position: ${v}`);
  });

  mk("inset-0", "top:0;right:0;bottom:0;left:0;");

  mk("visible", "visibility:visible");
  mk("hidden", "visibility:hidden");

  [
    ["row", "row"],
    ["row-r", "row-reverse"],
    ["col", "column"],
    ["col-r", "column-reverse"],
  ].forEach(([n, a]) => {
    mk(n, `display:flex; flex-direction:${a}`);
  });

  ["nowrap", "wrap", "wrap-reverse"].forEach((v) => {
    mk(`flex-${v}`, `flex-wrap:${v}`);
  });

  [
    ["inital", "0 0 auto"],
    ["1", "1 1 0%"],
    ["auto", "1 1 auto"],
    ["none", "none"],
  ].forEach((v) => {
    mk(`flex-${v[0]}`, `flex:${v[1]}`);
  });

  [0, 1].forEach((v) => {
    mk(`flex-grow-${v}`, `flex-grow:${v}`);
    mk(`flex-shrink-${v}`, `flex-shrink:${v}`);
  });

  for (let i = -2; i <= 12; i++) {
    mk(`order-${i}`, `order: ${i}`);
    mk(
      `grid-cols-${i}`,
      `	grid-template-columns: repeat(${i}, minmax(0,${i}fr));`
    );
    mk(`grid-rows-${i}`, `	grid-template-rows: repeat(${i},minmax(0, ${i}fr));`);
    mk(`col-span-${i}`, `grid-column: span ${i} / span ${i}`);
    mk(`col-start-${i}`, `grid-column-start: ${i}`);
    mk(`col-end-${i}`, `grid-column-end: ${i}`);
  }
  mk(`grid-cols-none`, `	grid-template-columns:none`);
  mk(`grid-rows-none`, `	grid-template-rows:none`);
  mk(`col-auto`, `grid-column:auto`);
  mk(`col-start-auto`, `grid-column-start:auto`);
  mk(`col-end-auto`, `grid-column-end:auto`);

  [
    ["row", "row"],
    ["col", "column"],
    ["row-dense", "row dense"],
    ["col-dense", "column dense"],
  ].forEach((v) => {
    mk(`grid-flow-${v[0]}`, `grid-auto-flow:${v[1]}`);
  });

  ["auto", "stretch", "center", "baseline"].forEach((v) => {
    mk(`content-${v}`, `align-content:${fm[v]}`);
    mk(`self-${v}`, `align-self:${fm[v]}`);
  });

  ["start", "center", "end", "between", "around"].forEach((j) => {
    ["start", "center", "end", "auto", "baseline"].forEach((a) => {
      mk(`${j}-${a}`, `justify-content: ${fm[j]}; align-items:${fm[a]}`);
    });
  });

  for (let i = 0; i <= 20; i++) {
    mk(`an-${i * 50}`, `transition: all ${i * 50}ms var(--ease)`);
    mk(`spin-${i * 500}`, `animation: fbc-spin ${i * 0.5}s linear infinite`);

    [
      ["none", "none"],
      ["opa", "opacity"],
      ["bg", "background"],
      ["shadow", "box-shadow"],
      ["trans", "transform"],
    ].forEach((v) => {
      mk(`an-${v[0]}-${i * 50}`, `transition: ${v[1]} ${i * 50}ms var(--ease)`);
    });
  }

  [
    ["ease", "cubic-bezier(0.23, 1, 0.32, 1)"],
    ["linear", "linear"],
    ["ease-in", "cubic-bezier(0.4, 0, 1, 1)"],
    ["ease-out", "cubic-bezier(0, 0, 0.2, 1)"],
    ["ease-in-out", "cubic-bezier(0.4, 0, 0.2, 1)"],
  ].forEach((v) => {
    mk(v[0], `--ease:${v[1]};`);
  });

  for (let i = 0; i <= 12; i++) {
    mk(`f-${i}`, `flex:${i}`);
  }

  for (let i = 0; i <= 100; i++) {
    mk(`z-${i * 10}`, `z:${i * 10}`);
  }

  [["fs", "font-size"]].forEach((v) => {
    fsUnit.forEach((s) => mk(`${v[0]}-${s}`, `${v[1]}:var(--fs-${s})`));
    vl((i) => {
      mk(`${v[0]}-${i}`, `${v[1]}:var(--a-${i})`);
    });
  });

  [
    ["italic", "italic"],
    ["not-italic", "normal"],
  ].forEach((v) => {
    mk(v[0], `font-style: ${v[1]}`);
  });

  ["left", "center", "right", "justify"].forEach((v) => {
    mk(`text-${v}`, `text-align:${v}`);
  });

  mk("text-transform-none", "text-transform: none");
  ["uppercase", "lowercase", "capitalize"].forEach((v) => {
    mk(v, `text-transform: ${v}`);
  });

  ["normal", "nowrap", "pre", "pre-line", "pre-wrap"].forEach((v) => {
    mk(`writespace-${v}`, `white-space:${v}`);
  });

  mk("break-normal", "work-break:normal;overflow-wrap:normal;");
  mk("break-word", "overflow-wrap:break-word;");
  mk("break-all", "work-break:break-all;");
  mk("nowrap", "overflow:hidden;text-overflow:ellipsis;white-space:nowrap");

  ["baseline", "top", "middle", "bottom", "text-top", "text-bottom"].forEach(
    (v) => {
      mk(`align-${v}`, `vertical-align:${v}`);
    }
  );

  for (let i = -2; i <= 7; i++) {
    mk(`letter-${i}`, `letter-spacing:${i * 0.05}em`);
  }

  mk(`line-none`, `line-height:1`);
  for (let i = 0; i <= 10; i++) {
    mk(`line-${i}`, `line-height:${0.5 + i * 0.125}rem`);
  }

  for (let i = 0; i <= 7; i++) {
    mk(`fw-${i}00`, `font-weight:${i}00`);
  }

  ["none", "disc", "decimal"].forEach((v) => {
    mk(`list-${v}`, `list-style-type:${v}`);
  });

  ["inside", "outside"].forEach((v) => {
    mk(`list-${v}`, `list-style-position:${v}`);
  });

  // space

  [
    ["left", "left"],
    ["top", "top"],
    ["right", "right"],
    ["bottom", "bottom"],
  ].forEach((v) => {
    scUnit.forEach((s) => mk(`${v[0]}-${s}`, `${v[1]}:var(--${s})`));
    scUnit.forEach((s) =>
      mk(`${v[0]}--${s}`, `${v[1]}:calc(0px - var(--${s}))`)
    );

    vl((i) => {
      mk(`${v[0]}-${i}`, `${v[1]}:var(--a-${i})`);
      mk(`${v[0]}--${i}`, `${v[1]}:calc(0px - var(--a-${i}))`);
    });
    for (let i = 0; i <= 12; i++) {
      mk(`${v[0]}-${i}\\/12`, `${v[1]}:var(--b-${i})`);
      mk(`${v[0]}--${i}\\/12`, `${v[1]}:calc(0px - var(--b-${i}))`);
    }
  });

  [
    ["w", "width"],
    ["min-w", "min-width"],
    ["max-w", "max-width"],
    ["h", "height"],
    ["min-h", "min-height"],
    ["max-h", "max-height"],
  ].forEach((v) => {
    unit.forEach((s) => mk(`${v[0]}-${s}`, `${v[1]}:var(--${s})`));
    unit.forEach((s) => mk(`${v[0]}-${s}`, `${v[1]}:var(--${s})`));
    scUnit.forEach((s) => mk(`${v[0]}-${s}`, `${v[1]}:var(--${s})`));
    scUnit.forEach((s) => mk(`${v[0]}-${s}`, `${v[1]}:var(--${s})`));

    vl((i) => {
      mk(`${v[0]}-${i}`, `${v[1]}:var(--a-${i})`);
    });

    for (let i = 0; i <= 12; i++) {
      mk(`${v[0]}-${i}\\/12`, `${v[1]}:var(--b-${i})`);
    }
  });

  [
    ["p", "padding"],
    ["m", "margin"],
    ["stroke", "stroke-width"],
    ["radius", "border-radius"],
    ["radius-q", "border-top-left-radius"],
    ["radius-w", "border-top-right-radius"],
    ["radius-a", "border-bottom-left-radius"],
    ["radius-s", "border-bottom-right-radius"],
    ["gap", "gap"],
    ["row-gap", "row-gap"],
    ["col-gap", "column-gap"],
  ].forEach((v) => {
    unit.forEach((s) => mk(`${v[0]}-${s}`, `${v[1]}:var(--${s})`));
    vl((i) => {
      mk(`${v[0]}-${i}`, `${v[1]}:var(--a-${i})`);
    });
  });

  [
    ["px", "padding-left", "padding-right"],
    ["py", "padding-top", "padding-bottom"],
    ["mx", "margin-left", "margin-right"],
    ["my", "margin-top", "margin-bottom"],
  ].forEach((v) => {
    unit.forEach((s) =>
      mk(`${v[0]}-${s}`, `${v[1]}:var(--${s}); ${v[2]}:var(--${s})`)
    );
    vl((i) => {
      mk(`${v[0]}-${i}`, `${v[1]}:var(--a-${i}); ${v[2]}:var(--a-${i})`);
    });
  });

  [
    ["pt", "padding-top"],
    ["pb", "padding-bottom"],
    ["pl", "padding-left"],
    ["pr", "padding-right"],
    ["mt", "margin-top"],
    ["mb", "margin-bottom"],
    ["ml", "margin-left"],
    ["mr", "margin-right"],
  ].forEach((v) => {
    unit.forEach((s) => mk(`${v[0]}-${s}`, `${v[1]}: var(--${s})`));
    unit.forEach((s) =>
      mk(`${v[0]}--${s}`, `${v[1]}: calc(0px - var(--${s}))`)
    );
    vl((i) => {
      mk(`${v[0]}-${i}`, `${v[1]}: var(--a-${i})`);
      mk(`${v[0]}--${i}`, `${v[1]}: calc(0px - var(--a-${i}))`);
    });
  });

  [
    ["b", "border"],
    ["bt", "border-top"],
    ["bb", "border-bottom"],
    ["bl", "border-left"],
    ["br", "border-right"],
  ].forEach((v) => {
    vl((i) => {
      mk(`${v[0]}-${i}`, `${v[1]}-width: var(--a-${i});solid #000;`);
    });

    ["solid", "dotted", "dashed"].forEach((s) => {
      mk(`${v[0]}-${s}`, `${v[1]}-style: ${s}`);
    });
  });

  mk(
    `shadow`,
    ` box-shadow: 0 1px 3px 0 rgba(var(--shadow-color), var(--shadow-opa)), 0 1px 2px 0 rgba(var(--shadow-color), calc(var(--shadow-opa) / 2));`
  );

  [
    ["xs", "0 0 0 1px", "0 0 0 0"],
    ["sm", "0 1px 2px 0", "0 0 0 0"],
    ["md", "0 4px 6px -1px", "0 2px 4px -1px"],
    ["lg", "0 10px 15px -3px", "0 4px 6px -2px"],
    ["xl", "0 20px 25px -5px", "0 10px 10px -5px"],
    ["2xl", "0 25px 50px -12px", "0 0 0 0"],
    ["inner", "inset 0 2px 4px 0", "0 0 0 0"],
    ["outline", "0 0 0 3px", "0 0 0 0"],
  ].forEach((v) => {
    const [n, a, b] = v;
    mk(
      `shadow-${n}`,
      `box-shadow: ${a} rgba(var(--shadow-color), var(--shadow-opa)), ${b} rgba(var(--shadow-color), calc(var(--shadow-opa) / 2));`
    );
  });

  [
    ["bg", "background-color"],
    ["b", "border-color"],
    ["text", "color"],
    ["placeholder", "color"],
    ["shadow", "shadow-color"],
  ].forEach((v) => {
    const [n, a] = v;
    colors.forEach((c) => {
      const once = c === "white" || c === "black";
      if (n === "shadow") {
        if (once) {
          mk(`${n}-${c}`, `--${n}-color:var(--${c});`);
        } else {
          for (let i = 1; i <= 9; i++) {
            mk(`${n}-${c}-${i}00`, `--${n}-color:var(--${c}-${i}00);`);
          }
        }
      } else {
        let hov = "";
        if (n === "placeholder") {
          hov = "::-webkit-input-placeholder";
        }
        if (once) {
          mk(
            `${n}-${c}${hov}`,
            `--${n}-opa: 1; ${a}:rgba(var(--${c}), var(--${n}-opa));`
          );
        } else {
          for (let i = 1; i <= 9; i++) {
            mk(
              `${n}-${c}-${i}00${hov}`,
              `--${n}-opa: 1; ${a}:rgba(var(--${c}-${i}00), var(--${n}-opa));`
            );
          }
        }
      }
    });

    for (let i = 0; i <= 100; i += 5) {
      mk(`${n}-opa-${i}`, `--${n}-opa: ${i / 100}`);
    }
    mk(`${n}-opa-0`, `--${n}-opa: 0`);
  });

  for (let i = 0; i <= 100; i += 5) {
    mk(`opa-${i}`, `opacity: ${i / 100}`);
  }
  mk(`opa-0`, `opacity: 0`);

  mk(
    "sr-only",
    `position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0, 0, 0, 0);white-space: nowrap;border-width: 0;`
  );

  mk(
    "not-sr-only",
    `position: static;width: auto;height: auto;padding: 0;margin: 0;overflow: visible;clip: auto;white-space: normal;`
  );

  [
    "none",
    "block",
    "flow-root",
    "inline-block",
    "flex",
    "inline-flex",
    "grid",
    "inline-grid",
    "table",
    "table-caption",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-footer-group",
    "table-header-group",
    "table-row-group",
    "table-row",
  ].forEach((v) => {
    mk(v, `display: ${v}`);
  });

  if (isFirst) {
    css += `.clearfix {
      &::after {
        content: "";
        display: table;
        clear: both;
      }
      }`;

    css += `
    :root {
    --fs-xs: .75rem;
    --fs-sm: .875rem;
    --fs-base: 1rem;
    --fs-lg: 1.125rem;
    --fs-xl: 1.25rem;
    --fs-2xl: 1.5rem;
    --fs-3xl: 1.875rem;
    --fs-4xl: 2.25rem;
    --fs-5xl: 3rem;
    --fs-6xl: 4rem;
    --sm: 640px;
    --md: 720px;
    --lg: 1024px;
    --xl: 1280px;
    --white: 255,255,255;
    --black: 0,0,0;
    --gray-100: 248,250,252;
    --gray-200: 237,242,246;
    --gray-300: 226,232,240;
    --gray-400: 204,213,224;
    --gray-500: 160,174,192;
    --gray-600: 113,128,150;
    --gray-700: 73,85,104;
    --gray-800: 44,55,72;
    --gray-900: 26,32,44;
    --red-100: 254,245,245;
    --red-200: 255,215,215;
    --red-300: 254,178,178;
    --red-400: 246,173,84;
    --red-500: 236,137,54;
    --red-600: 221,106,31;
    --red-700: 192,85,33;
    --red-800: 155,66,33;
    --red-900: 123,52,30;
    --orange-100: 255,250,240;
    --orange-200: 255,235,200;
    --orange-300: 251,211,141;
    --orange-400: 246,173,84;
    --orange-500: 236,137,54;
    --orange-600: 221,106,31;
    --orange-700: 192,85,33;
    --orange-800: 155,66,33;
    --orange-900: 123,52,30;
    --yellow-100: 255,255,240;
    --yellow-200: 255,252,191;
    --yellow-300: 250,240,136;
    --yellow-400: 245,224,94;
    --yellow-500: 235,200,75;
    --yellow-600: 215,158,46;
    --yellow-700: 182,121,31;
    --yellow-800: 151,90,23;
    --yellow-900: 116,65,16;
    --green-100: 240,255,244;
    --green-200: 198,246,213;
    --green-300: 155,230,180;
    --green-400: 104,211,145;
    --green-500: 72,187,129;
    --green-600: 56,161,105;
    --green-700: 47,132,90;
    --green-800: 39,104,73;
    --green-900: 33,84,61;
    --teal-100: 230,255,250;
    --teal-200: 177,245,234;
    --teal-300: 129,231,217;
    --teal-400: 78,209,197;
    --teal-500: 55,179,172;
    --teal-600: 49,151,149;
    --teal-700: 46,122,123;
    --teal-800: 39,94,97;
    --teal-900: 35,78,82;
    --blue-100: 235,248,255;
    --blue-200: 190,227,248;
    --blue-300: 144,205,244;
    --blue-400: 98,179,237;
    --blue-500: 66,153,225;
    --blue-600: 49,130,206;
    --blue-700: 43,109,176;
    --blue-800: 44,82,130;
    --blue-900: 43,67,101;
    --indigo-100: 236,244,255;
    --indigo-200: 195,218,254;
    --indigo-300: 162,191,250;
    --indigo-400: 127,156,244;
    --indigo-500: 102,126,234;
    --indigo-600: 89,104,216;
    --indigo-700: 76,82,191;
    --indigo-800: 67,64,144;
    --indigo-900: 60,54,107;
    --purple-100: 250,245,255;
    --purple-200: 233,217,253;
    --purple-300: 215,188,250;
    --purple-400: 182,147,244;
    --purple-500: 159,121,234;
    --purple-600: 128,90,213;
    --purple-700: 108,71,193;
    --purple-800: 85,60,154;
    --purple-900: 67,51,122;
    --pink-100: 255,245,247;
    --pink-200: 255,214,226;
    --pink-300: 251,182,206;
    --pink-400: 245,136,179;
    --pink-500: 237,99,166;
    --pink-600: 214,63,140;
    --pink-700: 184,50,128;
    --pink-800: 151,39,109;
    --pink-900: 112,35,89;
    --none: none;
    --auto: auto;
    --px: 0.5px;
    --vw: 100vw;
    --vh: 100vh;
    --ease: cubic-bezier(0.23, 1, 0.32, 1);
    --shadow-color: 0,0,0;
    --shadow-opa: 0.1;
    }
    `;
  }
}
function mkEle(_css: string, _min: string, _max: string) {
  const el = document.createElement("style");
  el.type = "text/css";
  el.innerText =
    _css +
    `@media screen and (min-width:640px){${_min}}` +
    `@media screen and (max-width:640px){${_max}}`;
  document.head.appendChild(el);
}

start(mknow, true);
mkEle(css, min, max);
setTimeout(() => {
  start(mkout, false);
  mkEle(css2, min2, max2);
}, 50);

