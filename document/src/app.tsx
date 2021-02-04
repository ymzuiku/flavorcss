import { Header } from "./components/Header";
import { EditorPlan } from "./components/EditorPlan";
import { Card } from "./components/Card";
import { List } from "./components/List";

export function App() {
  return (
    <div>
      <Header />
      <div class="mt:--xxl p:--lg sm:p:--xl grid-gap:--xxl d:grid place-content:center">
        <div>
          <h1 class="sm:text-align:center fs:50px sm:fs:60px xl:fs:70px fw:800 line-height:1">
            Getting started with Flavor CSS
          </h1>
          <p class="sm:text-align:center mt:--xl fs:--h3 fw:300 color:hsl(--h,20%,40%)">
            Learn Tailwind the way that best matches your learning style.
          </p>
        </div>
        <div class="sm-max:rows:1fr|1fr sm:cols:1fr|1fr m:--md mt:40px max-w:800px grid-gap:--lg">
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
          {/* <Card
            h={135}
            title="The examples"
            info="Here are some simple examples. Take 5 minutes to read them and
            immediately learn how to use flavor."
            button="Read Examples"
          /> */}
        </div>
      </div>
      <List />
    </div>
  );
}
