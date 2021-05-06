import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { details } from "./appData";
import { rightSvg } from "./svgs";

export function App() {
  const out = document.createElement("div");
  out.className = "max-w:100vw o:hidden md:max-w:1100px m:0|auto";

  const main = document.createElement("main");
  main.className =
    "mt:40px sm:mt:100px p:--a6 lg:p:--a6 gap:--a6 g-row pc:center";

  out.append(Header(), main);
  main.append(renderContent(), renderMiddle(), renderFoot());

  return out;
}

function renderContent() {
  const content = document.createElement("section");
  content.className = "max-w:900px";

  const h1 = document.createElement("h1");
  h1.className =
    "lg:text-align:center fs:46px lg:fs:56px xl:fs:60px font-weight:800 line-height:1";
  h1.append(
    "Don't need to memorize key words'",
    (() => {
      const span = document.createElement("span");
      span.className = "color:hsl(150,50%,50%)";
      span.textContent = "Runtime";
      return span;
    })(),
    "library"
  );

  const p = document.createElement("p");
  p.className =
    "lg:text-align:center mt:--xl fs:--h3 fw:300 color:hsl(--h,20%,40%)";
  p.textContent =
    "If you like tailwind css, you will fall in love with flavor css.";

  content.append(h1, p, renderCards());

  return content;
}

function renderCards() {
  const cards = document.createElement("section");
  cards.className =
    "margin:0|auto rows:1fr|1fr sm:rows:1fr sm:cols:1fr|1fr m:--md mt:40px max-w:800px grid-gap:--lg place-self:center";
  cards.append(
    Card({
      h: 200,
      title: "Read the docs",
      info: "Learn how to use flavor.",
      button: "Start learning",
      url: "/doc",
    }),
    Card({
      h: 155,
      title: "The examples",
      info:
        "Here are some simple examples. Take 5 minutes to read them and immediately learn how to use flavor.",
      button: "Read Examples",
      url: "/example",
    })
  );
  return cards;
}

function renderMiddle() {
  const section = document.createElement("section");
  section.className =
    "xxl:text-align:center:* max-width:1100px margin:0|auto display:grid md:place-content:center max-width:1000px:*";

  section.append(
    (() => {
      const h3 = document.createElement("h3");
      h3.className = "color:hsl(220,50%,35%) font-weight:700";
      h3.textContent = "FEATURES";
      return h3;
    })(),
    (() => {
      const h2 = document.createElement("h3");
      h2.className = "color:hsl(220,60%,10%) font-size:36px font-weight:800";
      h2.textContent = "FEATURES";
      return h2;
    })(),
    (() => {
      const h4 = document.createElement("h3");
      h4.className =
        "color:hsl(200,40%,30%) font-size:22px font-weight:300 margin:20px|auto";
      h4.textContent =
        "The scheme of flavourcss avoids the problem of how to determine the boundary of the number of atomic classes. Flavourcss compiles atomic class at runtime, which directly solves the volume and engineering configuration problems of massive atomic class.";
      return h4;
    })()
  );

  const main = document.createElement("main");
  main.className =
    "margin:40px|0px display:grid  grid-template-columns:repeat(auto-fill,100%) md:grid-template-columns:repeat(auto-fill,475px) place-main:center grid-gap:60px";
  main.append(
    ...details.map((item) => {
      const section = document.createElement("section");
      section.className =
        "max-width:400px display:grid grid-template-columns:50px|auto grid-gap:20px";
      section.append(
        (() => {
          const i = document.createElement("i");
          i.className = "color:hsl(125,50%,50%)";
          i.innerHTML = rightSvg;
          return i;
        })(),
        item.info
      );
      return section;
    })
  );

  const out = document.createElement("div");
  out.className = "margin:100px|20px";
  out.append(section, main);
  return out;
}

function renderFoot() {
  const out = document.createElement("div");
  out.className = "margin:20px|auto max-width:1000px padding:20px";
  out.append(
    (() => {
      const h1 = document.createElement("h1");
      h1.className = "mt:40px font-size:40px font-weight:800 line-height:1";
      h1.textContent = "Getting started";
      return h1;
    })(),
    (() => {
      const p = document.createElement("p");
      p.className = "*md info";
      p.textContent =
        "Flavor don't neet hundreds and thousands of css class list, replace by a grammatical rule.";
      return p;
    })(),
    Title("Case 1:"),
    Info("Use unpkg modules:"),
    Code(
      `<script src="https://unpkg.com/flavorcss@0.6.0/es/index.js&quot;&gt;&lt;/script&gt"></script>`
    ),
    Title("Case 2:"),
    Info("Install flavorcss in your project:"),
    Code(`npm i --save flavorcss`),
    Info("Before your Element render:"),
    Code(`import "flavorcss"`),
    (() =>
      Object.assign(document.createElement("div"), {
        className: "height:200px",
      }))()
  );
  return out;
}

function Title(text: string) {
  const h1 = document.createElement("h1");
  h1.className = "mt:20px font-size:30px font-weight:800 line-height:1";
  h1.textContent = text;
  return h1;
}

function Info(text: string) {
  const el = document.createElement("p");
  el.className = "*md info";
  el.textContent = text;
  return el;
}

function Code(text: string) {
  const el = document.createElement("p");
  el.className = "*md code";
  el.textContent = text;
  return el;
}
