const cssVal = `
@media (pointer: fine) {
  .pointer, button, a, select {
    cursor: pointer;
  }
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
.scroll-snap-x {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.scroll-snap-y {
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  scroll-snap-type: y mandatory;
}
.scroll-snap-x > *, .scroll-snap-y > * {
  scroll-snap-align: start;
  flex: 0 0 100%;
}
  `;
const sty = document.createElement("style");
sty.textContent = cssVal;
document.head.append(sty);

const flavor = `
box: width:100% lg:max-width:$1 margin:0|auto;

ts: transition:$1;
tf: transform:$1;
d: display:$1;
pos: position:$1;
ta: text-align:$1;

f-col: display:flex flex-direction:column;
f-col-r: display:flex flex-direction:column-reverse;
f-row: display:flex flex-direction:row;
f-row-r: display:flex flex-direction:row-reverse;

gap: grid-gap:$1;
g-area: grid-area:$1;
g-areas: display:grid grid-template-areas:$1;

g-col: display:grid grid-auto-flow:column;
g-col-d: display:grid grid-auto-flow:column|dense;
g-row: display:grid grid-auto-flow:row;
g-row-d: display:grid grid-auto-flow:row|dense;

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
bgc: -webkit-background-clip:text background-image:linear-gradient($1,$2,$3) color:rgba(0,0,0,0);

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


f: flex:$1;
r: border-radius:$1;
z: z-index:$1;
c: color:$1;
ol: outline:$1;
o: overflow:$1 -webkit-overflow-scrolling:touch;
ox: overflow-x:$1 -webkit-overflow-scrolling:touch;
oy: overflow-y:$1 -webkit-overflow-scrolling:touch;
opa: opacity:$1;

shadow: box-shadow:$1;
`;

const flavorEle = document.createElement("template");
flavorEle.setAttribute("data-flavor", "");
flavorEle.innerHTML = flavor;
document.body.append(flavorEle);

export const a = 0;
