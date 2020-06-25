import doc from "components/doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";
import Code from "components/Code";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>响应式设计</h1>
        <div className={doc.h2}>移动优先原则</div>
        <div className={doc.p}>
          Flavorcss
          使用移动优先原则，即所有的属性默认应该是移动端的样式，如果我们需要为桌面端调整样式，再使用媒体查询
        </div>
        <div className={doc.p}>
          Flavorcss 的媒体查询只有一个指令 pc: ,
          但是适用所有样式、所有伪类，它表示在非手持设备的样式。
        </div>
        <div className={doc.info}>您可编辑下面代码，实时更新样式查看</div>
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>
          {`
<div class="bg-teal-100 p-2xl">
  <!-- 下面这行 row 表示在所有设备中，以 flex、row 进行排列 -->
  <!-- pc:col 表示，在桌面、Pad设备中，以 flex、column 进行排列 -->
  <div class="row pc:col max-w-screen-xs mx-auto p-xl bg-white radius-lg shadow-xl shadow-indigo-900 shadow-opacity-5">
    <div class="flex-0-0 pc:mb-lg">
      <img class="active:scale-120 pc:active:rotate--20 transition-500 h-3xl cursor-pointer" src="/static/imgs/msg2.svg" alt="ChitChat Logo">
    </div>
    <div class="ml-md pt-px col center-start">
      <h4 class="fs-xl c-gray-900 mb-sm">ChitChat</h4>
      <p class="fs-base c-gray-600">You have a new message! Touch Icon, Please.</p>
    </div>
  </div>
</div>
    `}
        </CodeEditor>
        <div className={doc.p}>
          在上面的示例中，我们拖动浏览器，能看到窗口在 720px 以下的变化：
        </div>
        <div className={doc.li}>
          1. 卡片布局发生了变化，桌面是上下结构，移动端是左右结构
        </div>
        <div className={doc.li}>
          2. 点击消息图标，桌面端会缩放并且旋转20度，移动端仅仅会缩放
        </div>
        <div className={doc.p}>
          Flavorcss 仅有一种媒体查询，没有 sm、md、lg、xl
          多种尺寸的媒体查询，这是为了减少编译体积而做的妥协,
        </div>
        <div className={doc.p}>
          同时可以为了减少记忆，我们所有样式都可以设置媒体查询，我们就不需要区分记忆哪些样式可以媒体查询。
        </div>
        <div className={doc.p}>
          绝大部分媒体查询，我们仅需要区别移动端和桌面端，其他非常偶然的需求，可以编写一小部分
          css 样式进行解决。
        </div>
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
