const timeStart = Date.now();
let css = "";

const unit = ["auto", "px", "vw", "vh"];
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
*,
*::before,
*::after {
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}
body {font-size:16px;padding:0px;margin:0px}
* {box-sizing: border-box; outline:0}
.sans	{font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";}
.serif {font-family: Georgia, Cambria, "Times New Roman", Times, serif;}
.mono	{font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}
.trans {
  --move-x: 0; --move-y: 0; --rotate: 0; --skew-x: 0; --skew-y: 0; --scale-x: 1; --scale-y: 1;
  transform: translateX(var(--move-x)) translateY(var(--move-y)) rotate(var(--rotate)) skewX(var(--skew-x)) skewY(var(--skew-y)) scaleX(var(--scale-x)) scaleY(var(--scale-y));
}
.smooth { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
.smooth-auto { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }
.appearance-none {appearance:none;}
.outline-none {outline:none}
`;

// const childs = [
//   ["first", "first-child"],
//   ["last", "last-child"],
//   ["odd", "nth-child(odd)"],
// ];

let max = "";
let min = "";
const add = (n: string, v: string) => {
  css += `.${n}{${v}} `;
  max += `.sm\\:${n}{${v}}`;
  min += `.hover\\:${n}:hover{${v}}`;
  min += `.group:hover .group\\:hover\\:${n}{${v}}`;
  ["focus", "active"].forEach((h) => {
    css += `.${h}\\:${n}:${h}{${v}} `;
    css += `.group:${h} .group\\:${h}\\:${n}{${v}} `;
    max += `.sm\\:${h}\\:${n}:${h}{${v}}`;
    max += `.group:${h} .group\\:sm\\:${h}\\:${n}{${v}}`;
  });
};

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
const l = 40;
root += `--b-0: 0%`;
for (let i = 1; i <= 12; i++) {
  root += `--b-${i}: ${(100 * i) / 24}%; `;
}

colors.forEach((v) => {
  if (v === "white" || v === "black") {
    root += `--${v}: var(--${v});`;
  } else {
    for (let i = 0; i <= 8; i++) {
      root += `--${v}-${i + 1}: var(--${v}-${i + 1})};`;
    }
  }
});
css += `:root{${root}}`;
// end root

// animation

for (let i = 0; i <= l; i++) {
  add(`move-x-${i}`, `--move-x:var(--a-${i})`);
  add(`move-y-${i}`, `--move-y:var(--a-${i})`);
  add(`move-x--${i}`, `--move-x:calc(0px - var(--a-${i}))`);
  add(`move-y--${i}`, `--move-y:calc(0px - var(--a-${i}))`);
}

for (let i = 0; i <= 12; i++) {
  add(`move-x-${i}\\/12`, `--move-x:var(--b-${i});`);
  add(`move-y-${i}\\/12`, `--move-y:var(--b-${i})`);
  add(`move-x--${i}\\/12`, `--move-x:calc(0px - var(--b-${i}));`);
  add(`move-y--${i}\\/12`, `--move-y:calc(0px - var(--b-${i}))`);
}

for (let i = 0; i <= 100; i++) {
  const a = i ? i / 100 : 0;
  add(`scale-${i}`, `--scale-x:${a};--scale-y:${a}`);
  add(`scale-x-${i}`, `--scale-x: ${a}`);
  add(`scale-y-${i}`, `--scale-y: ${a}`);
  add(`scale-x--${i}`, `--scale-x: -${a}`);
  add(`scale-y--${i}`, `--scale-y: -${a}`);
}

for (let i = 0; i <= l; i++) {
  add(`rotate-${i}0`, `--rotate:${i * 10}deg`);
  add(`rotate--${i}0`, `--rotate:-${i * 10}deg`);
}

for (let i = 0; i <= 10; i++) {
  add(`skew-x-${i}0`, `--skew-x:${i * 10}deg`);
  add(`skew-y-${i}0`, `--skew-y:${i * 10}deg`);
}

// details

for (let x = 0; x <= 4; x++) {
  for (let y = 0; y <= 4; y++) {
    css += `.orign-${x * 25}-${y * 25}{transform-orign:${x * 25}% ${y * 25}%}`;
  }
}

add("container", "width: 100%");
css += `@media screen and (max-width: 640px) {.container{max-width:640px}}`;
add("border-box", "box-sizing: border-box");
add("content-box", "box-sizing: content-box");

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
  add(v, `display: ${v}`);
});

["right", "left", "none", "both"].forEach((v) => {
  add(`float-${v}`, `float: ${v}`);
  add(`clear-${v}`, `clear: ${v}`);
});

["contain", "cover", "fill", "none", "scale-down"].forEach((v) => {
  add(`object-${v}`, `object-fix: ${v}`);
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
  add(`cursor-${v}`, `cursor: ${v}`);
});

for (let x = 0; x <= 4; x++) {
  for (let y = 0; y <= 4; y++) {
    add(`bg-${x}-${y}`, `background-position:${x}% ${y}%`);
    add(`object-${x}-${y}`, `object-position:${x}% ${y}%`);
    add(`transform-${x}-${y}`, `transform-position:${x}% ${y}%`);
  }
}

["repeat", "no-repeat", "repeat-x", "repeat-y", "round", "space"].forEach(
  (v) => {
    add(`bg-${v}`, `background-repeat:${v}`);
  }
);

["auto", "cover", "contain"].forEach((v) => {
  add(`bg-${v}`, `background-size:${v}`);
});

["auto", "hidden", "visible", "scroll", "auto"].forEach((v) => {
  add(`overflow-${v}`, `overflow:${v}`);
});

["none", "auto"].forEach((v) => {
  add(`events-${v}`, `pointer-events:${v}`);
});

["none", "auto", "text", "all"].forEach((v) => {
  add(`select-${v}`, `user-select:${v}`);
});

add("fill-current", "fill: currentColor");
add("stroke-current", "stroke: currentColor");

[
  ["none", "none"],
  ["both", "both"],
  ["x", "vertical"],
  ["y", "horizontal"],
].forEach((v) => {
  add(`resize-${v[0]}`, `resize:${v[1]}`);
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
  add(`overflow-${v[0]}-${v[1]}`, `overflow-${v[0]}:${v[1]}`);
});

add("scroll-touch", "	-webkit-overflow-scrolling:touch");
add("scroll-auto", "	-webkit-overflow-scrolling:auto");

["static", "fixed", "absolute", "relative", "sticky"].forEach((v) => {
  add(`${v}`, `position: ${v}`);
});

add("inset-0", "top:0;right:0;bottom:0;left:0;");

add("visible", "visibility:visible");
add("hidden", "visibility:hidden");

["row", "row-reverse", "column", "column-reverse"].forEach((v) => {
  add(v === "column" ? "col" : v, `flex-direction:${v}`);
});

["nowrap", "wrap", "wrap-reverse"].forEach((v) => {
  add(`flex-${v}`, `flex-wrap:${v}`);
});

[
  ["inital", "0 0 auto"],
  ["1", "1 1 0%"],
  ["auto", "1 1 auto"],
  ["none", "none"],
].forEach((v) => {
  add(`flex-${v[0]}`, `flex:${v[1]}`);
});

[0, 1].forEach((v) => {
  add(`flex-grow-${v}`, `flex-grow:${v}`);
  add(`flex-shrink-${v}`, `flex-shrink:${v}`);
});

for (let i = -2; i <= 12; i++) {
  add(`order-${i}`, `order: ${i}`);
  add(
    `grid-cols-${i}`,
    `	grid-template-columns: repeat(${i}, minmax(0,${i}fr));`
  );
  add(`grid-rows-${i}`, `	grid-template-rows: repeat(${i},minmax(0, ${i}fr));`);
  add(`col-span-${i}`, `grid-column: span ${i} / span ${i}`);
  add(`col-start-${i}`, `grid-column-start: ${i}`);
  add(`col-end-${i}`, `grid-column-end: ${i}`);
}
add(`grid-cols-none`, `	grid-template-columns:none`);
add(`grid-rows-none`, `	grid-template-rows:none`);
add(`col-auto`, `grid-column:auto`);
add(`col-start-auto`, `grid-column-start:auto`);
add(`col-end-auto`, `grid-column-end:auto`);

[
  ["row", "row"],
  ["col", "column"],
  ["row-dense", "row dense"],
  ["col-dense", "column dense"],
].forEach((v) => {
  add(`grid-flow-${v[0]}`, `grid-auto-flow:${v[1]}`);
});

const fm = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  between: "flex-between",
  around: "flex-around",
  auto: "auto",
  baseline: "baseline",
} as any;

["auto", "stretch", "center", "baseline"].forEach((v) => {
  add(`content-${v}`, `align-content:${fm[v]}`);
  add(`self-${v}`, `align-self:${fm[v]}`);
});

["start", "center", "end", "between", "around"].forEach((j) => {
  ["start", "center", "end", "auto", "baseline"].forEach((a) => {
    add(`${j}-${a}`, `justify-content: ${fm[j]}; align-items:${fm[a]}`);
  });
});

css += `.clearfix {
&::after {
  content: "";
  display: table;
  clear: both;
}
}`;

for (let i = 0; i <= 20; i++) {
  add(
    `an-${i * 50}`,
    `--ease: cubic-bezier(0.23, 1, 0.32, 1); transition: all ${
      i * 50
    }ms var(--ease)`
  );
  [
    ["none", "none"],
    ["opa", "opacity"],
    ["bg", "background"],
    ["shadow", "box-shadow"],
    ["trans", "transform"],
  ].forEach((v) => {
    add(
      `an-${v[0]}-${i * 50}`,
      `--ease: cubic-bezier(0.23, 1, 0.32, 1); transition: ${v[1]} ${
        i * 50
      }ms var(--ease)`
    );
  });
}

[
  ["ease", "cubic-bezier(0.23, 1, 0.32, 1)"],
  ["linear", "linear"],
  ["ease-in", "cubic-bezier(0.4, 0, 1, 1)"],
  ["ease-out", "cubic-bezier(0, 0, 0.2, 1)"],
  ["ease-in-out", "cubic-bezier(0.4, 0, 0.2, 1)"],
].forEach((v) => {
  add(v[0], `--ease:${v[1]};`);
});

for (let i = 0; i <= 12; i++) {
  add(`f-${i}`, `flex:${i}`);
}

for (let i = 0; i <= 100; i++) {
  add(`z-${i * 10}`, `z:${i * 10}`);
}

[["fs", "font-size"]].forEach((v) => {
  unit.forEach((s) => add(`${v[0]}-${s}`, `${v[1]}:var(--fs-${s})`));
  for (let i = 0; i <= l; i++) {
    add(`${v[0]}-${i}`, `${v[1]}:var(--a-${i})`);
  }
});

[
  ["italic", "italic"],
  ["not-italic", "normal"],
].forEach((v) => {
  add(v[0], `font-style: ${v[1]}`);
});

["left", "center", "right", "justify"].forEach((v) => {
  add(`text-${v}`, `text-align:${v}`);
});

add("text-transform-none", "text-transform: none");
["uppercase", "lowercase", "capitalize"].forEach((v) => {
  add(v, `text-transform: ${v}`);
});

["normal", "nowrap", "pre", "pre-line", "pre-wrap"].forEach((v) => {
  add(`writespace-${v}`, `white-space:${v}`);
});

add("break-normal", "work-break:normal;overflow-wrap:normal;");
add("break-word", "overflow-wrap:break-word;");
add("break-all", "work-break:break-all;");
add("nowrap", "overflow:hidden;text-overflow:ellipsis;white-space:nowrap");

["baseline", "top", "middle", "bottom", "text-top", "text-bottom"].forEach(
  (v) => {
    add(`align-${v}`, `vertical-align:${v}`);
  }
);

for (let i = -2; i <= 7; i++) {
  add(`letter-${i}`, `letter-spacing:${i * 0.05}em`);
}

for (let i = 0; i <= 10; i++) {
  add(`line-${i}`, `line-height:${0.5 + i * 0.125}rem`);
}

for (let i = 0; i <= 7; i++) {
  add(`fw-${i}00`, `font-weight:${i}00`);
}

["none", "disc", "decimal"].forEach((v) => {
  add(`list-${v}`, `list-style-type:${v}`);
});

["inside", "outside"].forEach((v) => {
  add(`list-${v}`, `list-style-position:${v}`);
});

// space

[
  ["left", "left"],
  ["top", "top"],
  ["right", "right"],
  ["bottom", "bottom"],
].forEach((v) => {
  unit.forEach((s) => add(`${v[0]}-${s}`, `${v[1]}:var(--${s})`));
  unit.forEach((s) => add(`${v[0]}--${s}`, `${v[1]}:calc(0px - var(--${s}))`));

  for (let i = 0; i <= l; i++) {
    add(`${v[0]}-${i}`, `${v[1]}:var(--a-${i})`);
    add(`${v[0]}--${i}`, `${v[1]}:calc(0px - var(--a-${i}))`);
  }
  for (let i = 0; i <= 12; i++) {
    add(`${v[0]}-${i}\\/12`, `${v[1]}:var(--b-${i})`);
    add(`${v[0]}--${i}\\/12`, `${v[1]}:calc(0px - var(--b-${i}))`);
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
  unit.forEach((s) => add(`${v[0]}-${s}`, `${v[1]}:var(--${s})`));

  for (let i = 0; i <= l; i++) {
    add(`${v[0]}-${i}`, `${v[1]}:var(--a-${i})`);
  }
  for (let i = 0; i <= 12; i++) {
    add(`${v[0]}-${i}\\/12`, `${v[1]}:var(--b-${i})`);
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
  unit.forEach((s) => add(`${v[0]}-${s}`, `${v[1]}:var(--${s})`));
  for (let i = 0; i <= l; i++) {
    add(`${v[0]}-${i}`, `${v[1]}:var(--a-${i})`);
  }
});

[
  ["px", "padding-left", "padding-right"],
  ["py", "padding-top", "padding-bottom"],
  ["mx", "margin-left", "margin-right"],
  ["my", "margin-top", "margin-bottom"],
].forEach((v) => {
  unit.forEach((s) =>
    add(`${v[0]}-${s}`, `${v[1]}:var(--${s}); ${v[2]}:var(--${s})`)
  );
  for (let i = 0; i <= l; i++) {
    add(`${v[0]}-${i}`, `${v[1]}:var(--a-${i}); ${v[2]}:var(--a-${i})`);
  }
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
  unit.forEach((s) => add(`${v[0]}-${s}`, `${v[1]}: var(--${s})`));
  unit.forEach((s) => add(`${v[0]}--${s}`, `${v[1]}: calc(0px - var(--${s}))`));
  for (let i = 0; i <= l; i++) {
    add(`${v[0]}-${i}`, `${v[1]}: var(--a-${i})`);
    add(`${v[0]}--${i}`, `${v[1]}: calc(0px - var(--a-${i}))`);
  }
});

[
  ["b", "border"],
  ["bt", "border-top"],
  ["bb", "border-bottom"],
  ["bl", "border-left"],
  ["br", "border-right"],
].forEach((v) => {
  for (let i = 0; i <= l; i++) {
    add(`${v[0]}-${i}`, `${v[1]}-width: var(--a-${i});solid #000;`);
  }

  ["solid", "dotted", "dashed"].forEach((s) => {
    add(`${v[0]}-${s}`, `${v[1]}-style: ${s}`);
  });
});

add(
  `shadow`,
  `--shadow-color: 0,0,0; --shadow-opa: 0.1; box-shadow: 0 1px 3px 0 rgba(var(--shadow-color), var(--shadow-opa)), 0 1px 2px 0 rgba(var(--shadow-color), calc(var(--shadow-opa) / 2));`
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
  add(
    `shadow-${n}`,
    `--shadow-color: 0,0,0; --shadow-opa: 0.08; box-shadow: ${a} rgba(var(--shadow-color), var(--shadow-opa)), ${b} rgba(var(--shadow-color), calc(var(--shadow-opa) / 2));`
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
        add(`${n}-${c}`, `--${n}-color:var(--${c});`);
      } else {
        for (let i = 1; i <= 9; i++) {
          add(`${n}-${c}-${i}`, `--${n}-color:var(--${c}-${i});`);
        }
      }
    } else {
      let hov = "";
      if (n === "placeholder") {
        hov = "::-webkit-input-placeholder";
      }
      if (once) {
        add(
          `${n}-${c}${hov}`,
          ` --${n}-opa: 1; ${a}:rgba(var(--${c}), var(--${n}-opa));`
        );
      } else {
        for (let i = 1; i <= 9; i++) {
          add(
            `${n}-${c}-${i}${hov}`,
            ` --${n}-opa: 1; ${a}:rgba(var(--${c}-${i}), var(--${n}-opa));`
          );
        }
      }
    }
  });

  for (let i = 0; i <= 100; i += 5) {
    add(`${n}-opa-${i}`, `--${n}-opa: ${i / 100}`);
  }
  add(`${n}-opa-0`, `--${n}-opa: 0`);
});

add(
  "sr-only",
  `position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0, 0, 0, 0);white-space: nowrap;border-width: 0;`
);

add(
  "not-sr-only",
  `position: static;width: auto;height: auto;padding: 0;margin: 0;overflow: visible;clip: auto;white-space: normal;`
);

css += `
:root {
--a-0: 0px;
--a-1: 1px;
--a-2: 2px;
--a-3: 3px;
--a-4: 4px;
--a-5: 5px;
--a-6: 6px;
--a-7: 7px;
--a-8: 8px;
--a-9: 12px;
--a-10: 14px;
--a-11: 16px;
--a-12: 18px;
--a-13: 22px;
--a-14: 24px;
--a-15: 26px;
--a-16: 28px;
--a-17: 32px;
--a-18: 36px;
--a-19: 40px;
--a-20: 44px;
--a-21: 48px;
--a-22: 64px;
--a-23: 86px;
--a-24: 100px;
--a-25: 150px;
--a-26: 200px;
--a-27: 250px;
--a-28: 300px;
--a-29: 350px;
--a-30: 400px;
--a-31: 450px;
--a-32: 500px;
--a-39: 550px;
--a-40: 600px;
--white: 255,255,255;
--black: 0,0,0;
--gray-1: 248,250,252;
--gray-2: 237,242,246;
--gray-3: 226,232,240;
--gray-4: 204,213,224;
--gray-5: 160,174,192;
--gray-6: 113,128,150;
--gray-7: 73,85,104;
--gray-8: 44,55,72;
--gray-9: 26,32,44;
--red-1: 254,245,245;
--red-2: 255,215,215;
--red-3: 254,178,178;
--red-4: 246,173,84;
--red-5: 236,137,54;
--red-6: 221,106,31;
--red-7: 192,85,33;
--red-8: 155,66,33;
--red-9: 123,52,30;
--orange-1: 255,250,240;
--orange-2: 255,235,200;
--orange-3: 251,211,141;
--orange-4: 246,173,84;
--orange-5: 236,137,54;
--orange-6: 221,106,31;
--orange-7: 192,85,33;
--orange-8: 155,66,33;
--orange-9: 123,52,30;
--yellow-1: 255,255,240;
--yellow-2: 255,252,191;
--yellow-3: 250,240,136;
--yellow-4: 245,224,94;
--yellow-5: 235,200,75;
--yellow-6: 215,158,46;
--yellow-7: 182,121,31;
--yellow-8: 151,90,23;
--yellow-9: 116,65,16;
--green-1: 240,255,244;
--green-2: 198,246,213;
--green-3: 155,230,180;
--green-4: 104,211,145;
--green-5: 72,187,129;
--green-6: 56,161,105;
--green-7: 47,132,90;
--green-8: 39,104,73;
--green-9: 33,84,61;
--teal-1: 230,255,250;
--teal-2: 177,245,234;
--teal-3: 129,231,217;
--teal-4: 78,209,197;
--teal-5: 55,179,172;
--teal-6: 49,151,149;
--teal-7: 46,122,123;
--teal-8: 39,94,97;
--teal-9: 35,78,82;
--blue-1: 235,248,255;
--blue-2: 190,227,248;
--blue-3: 144,205,244;
--blue-4: 98,179,237;
--blue-5: 66,153,225;
--blue-6: 49,130,206;
--blue-7: 43,109,176;
--blue-8: 44,82,130;
--blue-9: 43,67,101;
--indigo-1: 236,244,255;
--indigo-2: 195,218,254;
--indigo-3: 162,191,250;
--indigo-4: 127,156,244;
--indigo-5: 102,126,234;
--indigo-6: 89,104,216;
--indigo-7: 76,82,191;
--indigo-8: 67,64,144;
--indigo-9: 60,54,107;
--purple-1: 250,245,255;
--purple-2: 233,217,253;
--purple-3: 215,188,250;
--purple-4: 182,147,244;
--purple-5: 159,121,234;
--purple-6: 128,90,213;
--purple-7: 108,71,193;
--purple-8: 85,60,154;
--purple-9: 67,51,122;
--pink-1: 255,245,247;
--pink-2: 255,214,226;
--pink-3: 251,182,206;
--pink-4: 245,136,179;
--pink-5: 237,99,166;
--pink-6: 214,63,140;
--pink-7: 184,50,128;
--pink-8: 151,39,109;
--pink-9: 112,35,89;
--auto: auto;
--px: 0.5px;
--vw: 100vw;
--vh: 100vh;
}
`;

console.log("time1:", Date.now() - timeStart);

const el = document.createElement("style");
el.textContent =
  css +
  `@media screen and (min-width:640px){${min}}` +
  `@media screen and (max-width:640px){${max}}`;
document.head.appendChild(el);

css = void 0 as any;
min = void 0 as any;
max = void 0 as any;

console.log("time:", Date.now() - timeStart);
const fbc = document.getElementById("fbc");
if (fbc) {
  fbc.style.removeProperty("display");
}

export default 0;
