import { Header } from "./components/Header";
import { Card } from "./components/Card";

const details = [
  {
    title: "No configuration project required",
    info:
      "Flavor CSS only import a js library, Using CSS variable reasonably, modifying the value of atomic class does not need rebuild.",
  },
  {
    title: "Infinite atomic classes",
    info:
      "Conventional Atomic class with different values, media queries, pseudo class combination, there will be a very large number. If we only use part of them, we will need to leave HTML. Flavor CSS dynamically compiles and adds the atomic classes we use.",
  },
  {
    title: "Rich functions",
    info:
      "Support more than 20 kinds of media query, including screen width, device type, dark; support nearly complete pseudo class; support CSS selector.",
  },
  {
    title: "Dynamic customization",
    info:
      "Flavor supports all inline styles by default. It also provides the function of self defining atomic classes, and it can partition the namespace to prevent CSS pollution.",
  },
];

export function App() {
  return (
    <div class="max-w:100vw overflow:hidden md:max-w:1100px margin:0|auto">
      <Header />
      <div class="mt:40px sm:mt:100px p:--lg lg:p:--xl grid-gap:--xxl d:grid place-content:center">
        <div class="max-w:900px">
          <h1 class="lg:text-align:center fs:46px lg:fs:56px xl:fs:60px font-weight:800 line-height:1">
            Don't need to memorize key words'{" "}
            <span class="color:hsl(150,50%,50%)">Runtime</span> atomic class CSS
            library
          </h1>
          <p class="lg:text-align:center mt:--xl fs:--h3 fw:300 color:hsl(--h,20%,40%)">
            If you like tailwind css, you will fall in love with flavor css.
          </p>
        </div>
        <div class="margin:0|auto rows:1fr|1fr sm:rows:1fr sm:cols:1fr|1fr m:--md mt:40px max-w:800px grid-gap:--lg place-self:center">
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
      <div class="margin:100px|20px">
        <section class="xxl:text-align:center:* max-width:1100px margin:0|auto display:grid md:place-content:center max-width:1000px:*">
          <h3 class="color:hsl(220,50%,35%) font-weight:700">FEATURES</h3>
          <h2 class="color:hsl(220,60%,10%) font-size:36px font-weight:800 ">
            Solve the following problems for the current atomic class
          </h2>
          <h4 class="color:hsl(200,40%,30%) font-size:22px font-weight:300 margin:20px|auto">
            The scheme of flavourcss avoids the problem of how to determine the
            boundary of the number of atomic classes. Flavourcss compiles atomic
            class at runtime, which directly solves the volume and engineering
            configuration problems of massive atomic class.
          </h4>
        </section>
        <main
          class="margin:40px|0px display:grid 
          grid-template-columns:repeat(auto-fill,100%)
          md:grid-template-columns:repeat(auto-fill,475px)
          place-content:center grid-gap:60px"
        >
          {details.map((item) => {
            return (
              <setcion class="max-width:400px display:grid grid-template-columns:50px|auto grid-gap:20px">
                <i class="color:hsl(125,50%,50%)">
                  <svg
                    t="1612493665093"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2403"
                    width="3em"
                    height="3em"
                  >
                    <path
                      d="M715.360865 384.064577L488.715532 610.70991a27.232865 27.232865 0 0 1-38.524541 0l-121.25636-121.25636a37.251459 37.251459 0 0 0-52.694487 0 37.251459 37.251459 0 0 0 0 52.694486l133.673514 133.673514a84.207856 84.207856 0 0 0 119.079207 0l239.062486-239.062487a37.251459 37.251459 0 0 0 0-52.694486 37.251459 37.251459 0 0 0-52.694486 0z"
                      p-id="2404"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
                <div class="diplay:grid grid-template-rows:50px|auto">
                  <h3 class="font-weight:500 font-size:20px color:hsl(220,50%,20%)">
                    {item.title}
                  </h3>
                  <h4 class="font-weight:300 font-size:16px color:hsl(200,50%,35%)">
                    {item.info}
                  </h4>
                </div>
              </setcion>
            );
          })}
        </main>
      </div>
      <div class="margin:20px|auto max-width:1000px padding:20px">
        <h1 class="mt:40px font-size:40px font-weight:800 line-height:1">
          Getting started
        </h1>
        <p class="md-info">
          Flavor don't neet hundreds and thousands of css class list, replace by
          a grammatical rule.
        </p>
        <h1 class="mt:20px font-size:30px font-weight:800 line-height:1">
          Case 1:
        </h1>
        <p class="md-info">Use unpkg modules:</p>
        <p class="md-code">
          &lt;script type=&quot;module&quot;
          src=&quot;https://unpkg.com/flavorcss@0.6.9/es/index.js&quot;&gt;&lt;/script&gt;
        </p>
        <h1 class="mt:20px font-size:30px font-weight:800 line-height:1">
          Case 2:
        </h1>
        <p class="md-info">Install flavorcss in your project:</p>
        <p class="md-code">npm i --save flavorcss</p>
        <p class="md-info">Before your Element render:</p>
        <p class="md-code">import "flavorcss"</p>
      </div>
      <div class="height:200px"></div>
    </div>
  );
}
