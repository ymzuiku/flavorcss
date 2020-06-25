import doc from "components/doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";
import Code from "components/Code";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Atomic Class</h1>
        <div className={doc.h2}>使用传统方法，其中定制设计需要定制CSS</div>
        <Code className={[doc.editCode, "max-h-5xl"].join(" ")}>{`

<style>
.chat-box {
  padding: 20px;
  width: 100%;
}
.chat-notification {
  display: flex;
  max-width: 24rem;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.chat-notification-logo-wrapper {
  flex-shrink: 0;
}
.chat-notification-logo {
  height: 3rem;
  width: 3rem;
}
.chat-notification-content {
  margin-left: 1.5rem;
  padding-top: 0.25rem;
}
.chat-notification-title {
  color: #1a202c;
  font-size: 1.25rem;
  line-height: 1.25;
}
.chat-notification-message {
  color: #718096;
  font-size: 1rem;
  line-height: 1.5;
}
</style>
<div class="chat-box>
<div class="chat-notification">
<div class="chat-notification-logo-wrapper">
  <img class="chat-notification-logo" src="/static/imgs/msg2.svg" alt="ChitChat Logo">
</div>
<div class="chat-notification-content">
  <h4 class="chat-notification-title">ChitChat</h4>
  <p class="chat-notification-message">You have a new message!</p>
</div>
</div>
</div>
  `}</Code>
        <div>
          <div className="bg-teal-100 p-2xl">
            <div className="max-w-screen-xs mx-auto row p-xl bg-white radius-lg shadow-xl">
              <div className="flex-0-0">
                <img
                  className="h-3xl"
                  src="/static/imgs/msg2.svg"
                  alt="ChitChat Logo"
                />
              </div>
              <div className="ml-md pt-px col center-start">
                <h4 className="fs-xl c-gray-900 mb-sm">ChitChat</h4>
                <p className="fs-base c-gray-600">You have a new message!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2xl"></div>
        <div id='bbb' className={doc.h2}>
          使用 Atomic Class 构建自定义设计而无需编写CSS
        </div>
        <div className={doc.p}>您可编辑下面代码，实时更新样式查看</div>
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>
          {`
<div class="bg-teal-100 p-2xl">
  <div class="max-w-screen-xs mx-auto row p-xl bg-white radius-lg shadow-xl">
    <div class="flex-0-0">
      <img class="h-3xl" src="/static/imgs/msg2.svg" alt="ChitChat Logo">
    </div>
    <div class="ml-md pt-px col center-start">
      <h4 class="fs-xl c-gray-900 mb-sm">ChitChat</h4>
      <p class="fs-base c-gray-600">You have a new message!</p>
    </div>
  </div>
</div>
    `}
        </CodeEditor>
        <div className={doc.p}>在上面的示例中，我们使用了：</div>
        <div className="px-md pt-md">
          1. Flavorcss 的 max-w-screen-xs 来设置最大宽度, mx-auto 来设置 margin:
          auto 0, row 来设置 flex row, p-xl 来控制 padding
        </div>
        <div className="px-md pt-md">
          2. bg-white 来设置背景色， radius-lg来设计大圆角，shadow-lg
          来设置大阴影
        </div>
        <div className="px-md pt-md">3. h-3xl 来设置图片尺寸</div>
        <div className="px-md pt-md">
          4. fs-xl fs-base 来设置卡片字体大小，c-gray-600 设置 color
        </div>
        <div className={doc.p}>
          我们使用 Atomic Class 风格的方式编写页面，整个过程无需编写任何一行自定义 CSS，他可以带来以下几个好处：
        </div>
        <div className="px-md pt-md">
          1. 不需要花费精力去设计类名，通过查看样式名就可以知道样式内容
        </div>
        <div className="px-md pt-md">
          2. 有约束的单位，强制整个UI被一个设计系统约束，提供外观一致性
        </div>
        <div className="px-md pt-md">
          3. 更简易的编写媒体查询、伪类
        </div>
        <div className="px-md pt-md">
          4. 整个项目没有额外的 CSS 文件，减小首次加载体积
        </div>
        <div className="px-md pt-md">
          5. 调整样式更安全，因为好像内联样式一样，但是拥有内联样式无法简单做到的功能
        </div> 
        <div></div>
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
