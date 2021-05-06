import { Header } from "./components/Header";
import { DocList } from "./components/DocList";
import { medias } from "./components/moreDetail";

export default () => {
  const h1 = document.createElement("h1");
  h1.className =
    "mt:40px sm:mt:100px lg:text-align:center fs:46px lg:fs:56px xl:fs:60px font-weight:800 line-height:1";
  h1.append(
    "Learn",
    (() => {
      const span = document.createElement("span");
      span.className = "color:hsl(150,50%,50%)";
      span.textContent =
        "and for forget hundreds and thousands of library key words.";
      return span;
    })()
  );

  const box = document.createElement("div");
  box.className = "margin:20px";
  box.append(
    h1,
    (() => {
      const p = document.createElement("p");
      p.className =
        "lg:text-align:center mt:--xl fs:--h3 fw:300 color:hsl(--h,20%,40%)";
      p.textContent =
        "If you like tailwind css, you will fall in love with flavor css.";
      return p;
    })()
  );

  const docList = document.createElement("div");
  DocList().then((el) => docList.replaceWith(el));

  const out = document.createElement("div");
  out.className = "max-w:1100px margin:0|auto";
  out.append(
    Header(),
    box,
    docList,
    (() => {
      const out = document.createElement("h1");
      out.className =
        "margin-top:100px font-size:40px font-weight:800 line-height:1";
      out.textContent = "Appendix";
      return out;
    })(),
    medias
  );
  return out;
};
