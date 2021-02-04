import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { List } from "./components/List";
import { pseudos, medias } from "./components/moreDetail";

export function App() {
  return (
    <div class="max-w:1100px margin:0|auto">
      <Header />
      <div class="mt:100px p:--lg lg:p:--xl grid-gap:--xxl d:grid place-content:center">
        <div class="max-w:900px">
          <h1 class="lg:text-align:center fs:46px lg:fs:56px xl:fs:60px font-weight:800 line-height:1">
            Don't need to memorize new words'{" "}
            <span class="color:hsl(150,50%,50%)">Runtime</span> atomic class CSS
            library
          </h1>
          <p class="lg:text-align:center mt:--xl fs:--h3 fw:300 color:hsl(--h,20%,40%)">
            If you like tailwind css, you will fall in love with flavor css.
          </p>
        </div>
        <div class="margin:0|auto rows:1fr|1fr lg:rows:1fr lg:cols:1fr|1fr m:--md mt:40px max-w:800px grid-gap:--lg place-self:center">
          <Card
            h={200}
            title="Read the docs"
            info="Learn how to use flavor."
            button="Start learning"
            url="/doc"
          />
          <Card
            h={155}
            title="The examples"
            info="Here are some simple examples. Take 5 minutes to read them and
            immediately learn how to use flavor."
            button="Read Examples"
            url="/example"
          />
        </div>
      </div>
      {/* <div class="mt:50px lg:max-w:1100px margin:0|auto">
        <p class="d:none lg:d:block lg:text-align:center mt:--xl fs:--h3 fw:300 color:hsl(--h,20%,40%)">
          Change Right codes to learn Flavor CSS:
        </p>
      </div> */}

      <div class="margin:20px">
        <h1 class="mt:40px font-size:40px font-weight:800 line-height:1">
          Getting started
        </h1>
        <p class="[md] info">
          Flavor don't neet hundreds and thousands of css class list, replace by
          a grammatical rule.
        </p>
        <p class="[md] info">Install flavorcss in your project:</p>
        <p class="[md] code">npm i --save flavorcss</p>
        <p class="[md] info">Before your Element render:</p>
        <p class="[md] code">import "flavorcss"</p>
      </div>
      <div class="height:200px"></div>
    </div>
  );
}
