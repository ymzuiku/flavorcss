import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <Header />
      <div class="mt:--xxl p:--lg sm:cols:1fr|1fr">
        <div>
          <h1 class="fs:--big-head fw:800 line-height:1">
            Infinite atomic class in{" "}
            <span class="color:hsl(150,50%,50%)">RUNTIME.</span>
          </h1>
          <p class="mt:--xl fs:--h3 fw:300 color:hsl(--h,20%,40%)">
            An runtime library with parameters; it's easy to customize hundreds
            of atomic classes; it's easy to implement media query and pseudo
            class, and it's perfect with CSS variables.
          </p>
        </div>
        <div class="bg:--dark color:--white p:--lg m:--md|0 radius:--md items:start,center mono hover:bg:--deep-dark overflow-x:auto">
          <p>
            &lt;script
            src="https://unpkg.com/flavorcss@0.4.0/umd/index.js"&gt;&lt;/script&gt;
          </p>
        </div>
      </div>
      <div class="mt:--xxl p:--lg sm:cols:400px|1fr sm:p:--xl grid-gap:--xxl">
        <div>
          <h1 class="fs:--big-head fw:800 line-height:1">
            Getting started with Flavor CSS
          </h1>
          <p class="mt:--xl fs:--h3 fw:300 color:hsl(--h,20%,40%)">
            Learn Tailwind the way that best matches your learning style.
          </p>
        </div>
        <div class="rows:1fr|1fr sm:cols:1fr|1fr m:--md grid-gap:--lg">
          <div class="p:--xl p:--lg gradient:155deg,hsl(200,50%,50%),hsl(210,60%,45%) color:--white radius:--lg rows:auto|auto|--bar-height shadow:0px|--lg|--lg|hsla(210,50%,30%,0.15)">
            <h2 class="fs:--h3 fw:500">Read the docs</h2>
            <p class="fs:--h5 fw:300">
              Learn how to get Tailwind set up in your project.
            </p>
            <button class="time:0.2s,--ease bg:hsl(210,50%,40%) radius:--md mt:--md hover:bg:hsl(210,50%,35%) fw:500">
              Start learning
            </button>
          </div>
          <div class="p:--xl p:--lg gradient:155deg,hsl(150,50%,50%),hsl(160,60%,45%) color:--white radius:--lg rows:auto|auto|--bar-height shadow:0px|--lg|--lg|hsla(160,50%,30%,0.15)">
            <h2 class="fs:--h3 fw:500">The examples</h2>
            <p class="fs:--h5 fw:300">
              Here are some simple examples. Take 5 minutes to read them and
              immediately learn how to use flavor.
            </p>
            <button class="time:0.2s,--ease bg:hsl(160,50%,40%) radius:--md mt:--md hover:bg:hsl(160,50%,35%) fw:500">
              Read Examples
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
