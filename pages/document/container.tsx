import doc from "components/Doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Container</h1>
        <p className={doc.p}>
          flavorcss 的一个设计理念是尽可能少的添加新的关键词，所以 flavorcss
          没有提供默认的 Container
          类，但是我们可以根据自己的需要，很轻松的实现一个。
        </p>
        <p>
          我们使用 mx-auto 让卡片居中，使用 pc:max-w-@sm
          设定桌面条件下卡片的最大宽度：
        </p>

        <h2 className={doc.h3}>卡片示例</h2>
        <p className={doc.p}>
          小练习，将下面的 pc:max-w-@sm 改为
          pc:max-w-8/12，然后拖动浏览器查看样式区别
        </p>
        <CodeEditor className="col" codeClassName={doc.editCode}>{`
<div class="bg-gray-500 radius-md py-3xl w-12/12">
    <!-- 修改下面的 pc:max-w-@sm -->
    <div class="bg-white mx-auto pc:max-w-@sm radius-md row overflow-hidden shadow-md">
      <img class="h-5xl w-5xl" src="/static/imgs/building.jpeg" />
      <div class="p-xl col">
        <h1 class="fs-xl c-teal-800">Message Card</h1>
        <p class="fs-sm c-teal-600 mt-md">You have a new message</p>
        <div class="flex-1"></div>
        <button class="my-md bg-indigo-600 c-white px-md py-sm radius-sm shadow hover:bg-indigo-700 cursor-pointer">Show Message</button>
      </div>
    </div>
</div>
        `}</CodeEditor>
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
