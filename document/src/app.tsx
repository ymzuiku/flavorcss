import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { List } from "./components/List";

export function App() {
  return (
    <div>
      <Header />
      <div class="mt:--xxl p:--lg sm:p:--xl grid-gap:--xxl d:grid place-content:center">
        <div class="max-w:900px">
          <h1 class="sm:text-align:center fs:46px sm:fs:56px xl:fs:60px font-weight:800 line-height:1">
            Don't need to memorize new words'{" "}
            <span class="color:hsl(150,50%,50%)">Runtime</span> atomic class CSS
            library
          </h1>
          <p class="sm:text-align:center mt:--xl fs:--h3 fw:300 color:hsl(--h,20%,40%)">
            Learn Tailwind the way that best matches your learning style.
          </p>
        </div>
        <div class="margin:0|auto sm-max:rows:1fr|1fr sm:cols:1fr|1fr m:--md mt:40px max-w:800px grid-gap:--lg place-self:center">
          <Card
            h={200}
            title="Read the docs"
            info="Learn how to get Tailwind set up in your project."
            button="Start learning"
          />
          <Card
            h={155}
            title="The examples"
            info="Here are some simple examples. Take 5 minutes to read them and
            immediately learn how to use flavor."
            button="Read Examples"
          />
        </div>
      </div>
      {/* <div class="max-width:800px d:grid place-content:center margin:40px|auto">
        <div class="sm:cols:1fr|1fr sm:grid-gap:40px">
          <div>
            <p class="margin:10px|0 font-size:18px font-weight:300 color:hsl(200,20%,40%)">
              [1] Install flavorcss:
            </p>
            <p class="mono font-size:18px font-weight:300 line-height:1 border-radius:6px background:hsl(200,30%,45%) color:#fff padding:12px margin:10px|0">
              npm i --save flavorcss
            </p>
          </div>
          <div>
            <p class="margin:10px|0 font-size:18px font-weight:300 color:hsl(200,20%,40%)">
              [2] Import in your project:
            </p>
            <p class="mono font-size:18px font-weight:300 line-height:1 border-radius:6px background:hsl(200,30%,45%) color:#fff padding:12px margin:10px|0">
              import "flavorcss"
            </p>
          </div>
        </div>
      </div> */}
      <div class="mt:50px max-w:1300px margin:0|auto">
        <p class="sm:text-align:center mt:--xl fs:--h3 fw:300 color:hsl(--h,20%,40%)">
          Change Right codes to learn Flavor CSS:
        </p>
      </div>
      <List />
    </div>
  );
}
