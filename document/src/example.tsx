import { Header } from "./components/Header";
import { List } from "./components/List";
import { medias, pseudos } from "./components/moreDetail";

export default () => {
  return (
    <div class="max-w:1100px margin:0|auto">
      <Header />
      <div class="margin:20px">
        <h1 class="mt:100px lg:text-align:center fs:46px lg:fs:56px xl:fs:60px font-weight:800 line-height:1">
          Example <span class="color:hsl(150,50%,50%)">9 rule</span> and for
          forget hundreds and thousands of library key words.
        </h1>
        <p class="lg:text-align:center mt:--xl fs:--h3 fw:300 color:hsl(--h,20%,40%)">
          If you like tailwind css, you will fall in love with flavor css.
        </p>
      </div>
      <List />
      {pseudos}
      {medias}
    </div>
  );
};
