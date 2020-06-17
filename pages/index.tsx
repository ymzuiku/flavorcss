import { useState, useRef, useEffect } from "react";

function Side() {
  return (
    <aside>
      <div>list</div>
    </aside>
  );
}

function Nav() {
  return <nav>nav</nav>;
}

export default () => {
  const [code, setCode] = useState(base);
  const ref = useRef<HTMLDivElement>();
  useEffect(() => {
    ref.current.innerHTML = code;
  }, []);
  return (
    <div className="mini-scrollbar h-vh overflow-y-auto">
      <Nav />
      <div className="max-w-md bg-white mx-auto col center-center b-1 b-teal-300 radius-6 m-24 p-24">
        <h1 className="fs-4xl text-teal-300">
          <b className="text-teal-800">f</b>ull{" "}
          <b className="text-teal-800">b</b>uild{" "}
          <b className="text-teal-800">c</b>ss
        </h1>
        <h4 className="fs-sm p-12 text-teal-600">
          提交编译好你所需要的所有CSS
        </h4>
      </div>
      <div className="row mx-auto m-12 max-w-sm radius-4 overflow-hidden b-1 b-teal-300 col">
        <textarea
          className="bg-teal-100 mono text-teal-600 fs-xs min-w-6/12 min-h-260 mini-scrollbar"
          value={code}
          onChange={(e) => {
            const c = e.target.value;
            setCode(c);
            ref.current.innerHTML = c;
          }}
        />
        <div className="min-w-6/12">
          <div ref={(r) => (ref.current = r)}></div>
        </div>
      </div>
    </div>
  );
};

const base = `
<section class="bg-gray-500 p-24">
      <div
        class="max-w-md mx-auto w-full sm:max-w-full lg:flex b-0 b-teal-500 shadow-md bg-white radius-6 mt-24 overflow-hidden">
        <img class="w-200 h-420 sm:h-200 sm:w-full" src="/static/imgs/build.jpeg"></img>
        <div class="p-24 col">
          <div class="fs-sm text-gray-600 row start-center items-center">
            <svg class="fill-current text-gray-500 w-12 h-12 mr-8" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path
                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            <h2>有关原子风格</h2>
          </div>
          <div class="fs-2xl text-teal-800 fw-700 pt-12">
            您是否有尝试过原子风格的CSS编写方式?
          </div>
          <p class="fs-base text-teal-800 text-opa-70 line-28 pt-12">
            原子风格非常好，但是原子的边界在哪里？定义多少原子，才能完全摆脱编写 css 类？
          </p>
          <p class="fs-base text-teal-800 text-opa-70 line-28 pt-12">
            对于
            TailwindCSS 的方案，唯一美中不足的就是无法满足所有CSS功能的前提下确保足够小的体积。fbc的出现就是为了解决此问题。
          </p>
          <div class="flex-1"></div>
          <div class="row start-center pt-12">
            <img class="w-60 h-60 radius-200" src="/static/imgs/head.png" />
            <div class="col px-12">
              <p class="fs-lg fw-500 text-teal-700">Jonathan Reinink</p>
              <p class="fs-sm text-teal-500 pt-12">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
</section>
`;
