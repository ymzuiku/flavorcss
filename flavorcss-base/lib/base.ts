let alphas = "";

[
  ["white", "255,255,255"],
  ["black", "0,0,0"],
].forEach(function (item) {
  const [k, v] = item;
  alphas += `--${k}-0:rgba(${v},0); --${k}-5:rgba(${v},0.05);`;
  for (var a = 0; a <= 99; a += 5) {
    if (a > 5) {
      alphas += `--${k}-${a}:rgba(${v},0.${a}); `;
    }
  }
  alphas += `--${k}:rgba(${v},1); `;
});

const light = `
--bg-weak: #FAFBFD;
--bg: #fff;
--bg-deep: #dbdbdc;

--light-weak: #FAFBFD;
--light: #fff;
--light-deep: #dbdbdc;

--dark-weak: #5b6169;
--dark: #333A44;
--dark-deep: #000;

--gray-weak: #F8FAFC;
--gray: #EFF2F6;
--gray-deep: #E7EBF1;

--title-weak: #7f848a;
--title: #6F757D;
--title-deep: #3c4246;

--text-weak: #82878e;
--text: #6F757D;
--text-deep: #595F63;

--label-weak: #b9bec1;
--label: #9EA8AE;
--label-deep: #8C969C;

--primary-weak: #d9dbfd;
--primary: #747CEC;
--primary-deep: #6269C9;

--secondary-weak: #cbf3e0;
--secondary: #5FCC9B;
--secondary-deep: #50AC83;

--active-weak: rgba(196,206,236,0.35);
--active: rgba(73,115,242,0.35);
--active-deep: rgba(73,115,242,0.5);

--warn-weak: #FDF1D0;
--warn: #d4c396;
--warn-deep: #937224;

--error-weak: #FFCFCF;
--error: #ffaeae;
--error-deep: #CC3F3F;

--info-weak: #F1F3F9;
--info: #c0c6d8;
--info-deep: #6E757C;

--disable-weak: #DFE1E5;
--disable: #afb1b5;
--disable-deep: #677388;
`;

const dark = `
--bg-weak: #3e4650;
--bg: #353C45;
--bg-deep: #2e333c;

--light-weak: #85909F;
--light: #dadbdc;
--light-deep: #fff;

--dark-weak: #242B38;
--dark: #181d23;
--dark-deep: #000000;

--gray-weak: #3b414a;
--gray: #424953;
--gray-deep: #585f69;

--title-weak: #7f848a;
--title: #c4cad2;
--title-deep: #dee2e4;

--text-weak: #8d97a2;
--text: #aab4bf;
--text-deep: #E2E2E2;

--label-weak: #727b88;
--label: #8791A0;
--label-deep: #93A0B5;

--primary-weak: #d9dbfd;
--primary: #747CEC;
--primary-deep: #6269C9;

--secondary-weak: #cbf3e0;
--secondary: #5FCC9B;
--secondary-deep: #50AC83;

--active-weak: rgba(196,206,236,0.35);
--active: rgba(73,115,242,0.35);
--active-deep: rgba(73,115,242,0.5);

--warn-weak: #FDF1D0;
--warn: #d4c396;
--warn-deep: #937224;

--error-weak: #FFCFCF;
--error: #ffaeae;
--error-deep: #CC3F3F;

--info-weak: #F1F3F9;
--info: #c0c6d8;
--info-deep: #6E757C;

--disable-weak: #DFE1E5;
--disable: #afb1b5;
--disable-deep: #677388;


`;

const cssVal = `
:root {
--sans: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Noto Sans";
--serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
--mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
  "Liberation Mono", "Courier New", monospace;
--ease: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--mask: rgba(0,0,0,0.35);
--mask-deep: rgba(0,0,0,0.6);
--base-fs: 16px;
--px: 1px;
--r: 7px;
--h: 48px;
--w: 240px;
--a1: 10px;
--a2: 20px;
--a3: 30px;
--a4: 30px;
--a4: 40px;
--a5: 50px;
--a6: 60px;
--xs: 480px;
--sm: 640px;
--md: 768px;
--lg: 1024px;
--xl: 1280px;
--xxl: 1536px;
${alphas}
}
:root {
  ${light}
}
@media (prefers-color-scheme:dark) {
  :root {
    ${dark}
  }
}
.light {
  ${light}
}
.dark {
  ${dark}
}
body.reboot{
  margin: 0px;
  padding: 0px;
  background: var(--bg);
  font-size: var(--base-fs);
  font-family: var(--sans);
  height: 100vh;
  width: 100vw;
}

.reboot * {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.tap-none, .reboot button, .reboot input, .reboot a, .reboot select {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-appearance: none;
  border: none;
  outline: none;
}
@media (pointer: fine) {
  .pointer,
  .reboot button,
  .reboot a,
  .reboot select {
    cursor: pointer;
  }
}
.border-box {
  box-sizing: border-box;
}
.content-box {
  box-sizing: content-box;
}
.g-col {
  display: grid;
  grid-auto-flow: column;
}
.g-row {
  display: grid;
  grid-auto-flow: row;
}
.g-col-dense {
  display: grid;
  grid-auto-flow: column dense;
}
.g-row-dense {
  display: grid;
  grid-auto-flow: row dense;
}
.f-row {
  display: flex;
  flex-direction: row;
}
.f-col {
  display: flex;
  flex-direction: column;
}
.f-row-reverse {
  display: flex;
  flex-direction: row-reverse;
}
.f-col-reverse {
  display: flex;
  flex-direction: column-reverse;
}
.h-safe-top {
  height: 0;  
  height: constant(safe-area-inset-top);
  height: env(safe-area-inset-top);
}
.h-safe-bottom {
  height: 0;  
  height: constant(safe-area-inset-bottom);
  height: env(safe-area-inset-bottom);
}
.m-safe-top {
  margin-top: 0;  
  margin-top: constant(safe-area-inset-top);
  margin-top: env(safe-area-inset-top);
}
.m-safe-bottom {
  margin-bottom: 0;  
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
}
.p-safe-top {
  padding-top: 0;  
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}
.p-safe-bottom {
  padding-bottom: 0;  
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
  `;
const sty = document.createElement("style");
sty.textContent = cssVal;
document.head.append(sty);

const flavor = `
box: width:100% lg:max-width:$1 margin:0|auto;

tt: transition:$1;
tf: transform:$1;
d: display:$1;
pe: pointer-events:$1;
pos: position:$1;
ta: text-align:$1;

gap: grid-gap:$1;
g-area: grid-area:$1;
g-areas: display:grid grid-template-areas:$1;

g-rows: display:grid grid-template-rows:$1;
g-cols: display:grid grid-template-columns:$1;


pc: place-content:$1;
pi: place-items:$1;
ps: place-self:$1;
jc: justify-content:$1;
ji: justify-items:$1;
js: justify-self:$1;
ac: align-content:$1;
ai: align-items:$1;
as: align-self:$1;

bg: background:$1;
bgm: background-image:url('$1') background-repeat:no-repeat background-position:center|center background-size:cover;
bgg: background-image:linear-gradient($1,$2,$3);
cg: -webkit-background-clip:text gradient:$1,$2,$3 color:rgba(0,0,0,0);

h: height:$1;
min-h: min-height:$1;
max-h: max-height:$1;

w: width:$1;
min-w: min-width:$1;
max-w: max-width:$1;

s: width:$1 height:$1;
min-s: min-width:$1 min-height:$1;
max-s: max-width:$1 max-height:$1;

m: margin:$1;
mt: margin-top:$1;
mr: margin-right:$1;
ml: margin-left:$1;
mb: margin-bottom:$1;

p: padding:$1;
pt: padding-top:$1;
pr: padding-right:$1;
pl: padding-left:$1;
pb: padding-bottom:$1;

fs: font-size:$1;
fw: font-weight:$1;
fm: font-family:$1;
lp: letter-spacing:$1;

br: border-right:$1;
bl: border-left:$1;
bt: border-top:$1;
bb: border-bottom:$1;
b: border:$1;

b-px: border:--px|solid|$1;
br-px: border-right:--px|solid|$1;
bl-px: border-left:--px|solid|$1;
bt-px: border-top:--px|solid|$1;
bb-px: border-bottom:--px|solid|$1;

z: z-index:$1;
o: opacity:$1;
c: color:$1;
bs: box-shadow:$1;
bfl: -webkit-backdrop-filter:$1; backdrop-filter:$1;
r: border-radius:$1;
ol: outline:$1;
ox: overflow-x:$1 -webkit-overflow-scrolling:touch;
oy: overflow-y:$1 -webkit-overflow-scrolling:touch;
`;

const flavorEle = document.createElement("mark");
flavorEle.style.display = "none";
flavorEle.setAttribute("flavor", "");
flavorEle.textContent = flavor;
document.body.append(flavorEle);

export const a = 0;
