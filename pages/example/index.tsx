import React from "react";
import CodeEditor from "components/CodeEditor";
import Nav from "pages/components/Nav";
import doc from "components/doc";

export default () => {
  return (
    <div className="h-vh max-w-screen-lg mx-auto">
      <Nav />
      <div className="h-3xl"></div>
      <div className={doc.h1}>Example</div>
      <div className={doc.p}>
        以下所有示例均使用 flavorcss，您可以编辑代码以实时更新渲染的组件
      </div>
      <div className={doc.h2}>响应式卡片</div>
      <CodeEditor
        className={[doc.edit].join(" ")}
        codeClassName={[doc.editCode, "max-h-5xl"].join(" ")}
      >
        {base}
      </CodeEditor>
      <div className={doc.h2}>其他 Example 待补充</div>
      <div className="h-4xl"></div>
    </div>
  );
};

const base = `
<!-- 您可实时编辑此代码 -->
<section class="bg-gray-500 p-xl">
      <div
        class="pc:max-w-screen-md mx-auto w-full max-w-12/12 b-0 b-primary-500 shadow-md bg-white radius-md overflow-hidden col pc:row">
        <img class="w-12/12 h-5xl  pc:w-5xl pc:h-12/12" src="/static/imgs/build.jpeg"></img>
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
          <p class="fs-md c-primary-800 c-opacity-70 line-2xl pt-md">
            原子风格非常好，但是原子的边界在哪里？定义多少原子，才能完全摆脱编写 css 类？
          </p>
          <p class="fs-md c-primary-800 c-opacity-70 line-2xl pt-md">
            对于预编译的方案，唯一美中不足的就是无法满足海量CSS功能的前提下确保足够小的体积。flavorcss 的出现就是为了解决此问题。
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
