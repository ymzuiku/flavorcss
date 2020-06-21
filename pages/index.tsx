import React, { useState, useRef, useEffect } from "react";
import CodeEditor from "components/CodeEditor";
import Nav from "pages/Nav";

export default () => {
  return (
    <div className="h-vh overflow-y-auto">
      <Nav />
      <div className="mt-3xl max-w-middle bg-white mx-auto col center-center b-px b-primary-300 radius-sm m-xl p-xl">
        <h1 className="fs-xxl c-primary-300">
          <b className="c-primary-800">f</b>ull{" "}
          <b className="c-primary-800">b</b>uild{" "}
          <b className="c-primary-800">c</b>ss
        </h1>
        <h4 className="fs-sm p-sm c-primary-600">
          提交编译好你所需要的所有CSS
        </h4>
      </div>
      <CodeEditor
        className="col-r m-lg max-w-middle mx-auto shadow radius-sm overflow-hidden"
        codeClassName="py-sm px-md mini-scrollbar bg-white max-w-middle mx-auto max-h-4xl"
      >
        {base}
      </CodeEditor>
    </div>
  );
};

const base = `
<!-- 您可实时编辑此代码 -->
<section class="bg-gray-500 p-lg">
      <div
        class="max-w-middle mx-auto w-full sm:max-w-12/12 md:flex b-0 b-primary-500 shadow-md bg-white radius-md mt-lg overflow-hidden">
        <img class="w-5xl h-12/12 sm:h-5xl sm:w-12/12" src="/static/imgs/build.jpeg"></img>
        <div class="p-lg col">
          <div class="fs-sm c-gray-600 row start-center items-center">
            <svg class="fill-current c-gray-500 w-md h-md mr-sm" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path
                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            <h2>有关原子风格</h2>
          </div>
          <div class="fs-2xl c-primary-800 fw-700 pt-md">
            您是否有尝试过原子风格的CSS编写方式?
          </div>
          <p class="fs-md c-primary-800 c-opa-70 line-2xl pt-md">
            原子风格非常好，但是原子的边界在哪里？定义多少原子，才能完全摆脱编写 css 类？
          </p>
          <p class="fs-md c-primary-800 c-opa-70 line-2xl pt-md">
            对于
            TailwindCSS 的方案，唯一美中不足的就是无法满足所有CSS功能的前提下确保足够小的体积。fbc的出现就是为了解决此问题。
          </p>
          <div class="flex-1"></div>
          <div class="row start-center pt-md">
            <img class="w-2xl h-2xl radius-6xl" src="/static/imgs/head.png" />
            <div class="col px-md">
              <p class="fs-lg fw-500 c-primary-700">Jonathan Reinink</p>
              <p class="fs-sm c-primary-500 pt-sm">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
</section>
`;
