import doc from "components/doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";
import Code from "components/Code";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>伪类</h1>
        <div className={doc.h2}>hover</div>
        <div className={doc.p}>
          hover 是指鼠标移动到目标上的状态。flavorcss
          帮我们做好了移动端兼容，在移动端的屏宽内，hover
          是不生效的，这有效提高了移动端的体验。
        </div>
        <div className={doc.p}>hover 伪类的使用命令是使用 hover: 做为前缀:</div>
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>
          {`
<div class="bg-teal-100 p-2xl">
  <button class="hover:bg-indigo-500 shadow hover:shadow-lg flex-0-0 pc:mb-lg p-xl py-md bg-indigo-400 c-white radius-md cursor-pointer transition-700">
      Touch Me
  </button>
</div>
    `}
        </CodeEditor>
        <div className={doc.p}>
          在上面的示例中，我们鼠标焦距 button，可以看到 background 和 shadow
          的变化：
        </div>
        <div className={doc.li}>
          1. 卡片布局发生了变化，桌面是上下结构，移动端是左右结构
        </div>
        <div className={doc.li}>
          2. 点击消息图标，桌面端会缩放并且旋转20度，移动端仅仅会缩放
        </div>
        <div className={doc.h2}>active</div>
        <div className={doc.p}>
          hover 是指鼠标移动到目标上的状态。flavorcss
          帮我们做好了移动端兼容，在移动端的屏宽内，hover
          是不生效的，这有效提高了移动端的体验。
        </div>
        <div className={doc.p}>hover 伪类的使用命令是使用 hover: 做为前缀:</div>
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>
          {`
<div class="bg-teal-100 p-2xl">
  <button class="hover:bg-indigo-500 shadow hover:shadow-lg flex-0-0 pc:mb-lg p-xl py-md bg-indigo-400 c-white radius-md cursor-pointer transition-700">
      Touch Me
  </button>
</div>
    `}
        </CodeEditor>
        <div className={doc.p}>
          在上面的示例中，我们鼠标焦距 button，可以看到 background 和 shadow
          的变化：
        </div>
        <div className={doc.li}>
          1. 卡片布局发生了变化，桌面是上下结构，移动端是左右结构
        </div>
        <div className={doc.li}>
          2. 点击消息图标，桌面端会缩放并且旋转20度，移动端仅仅会缩放
        </div>
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
