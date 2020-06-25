import doc from "components/doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";
import Code from "components/Code";

function Hover(){
  return <>
    <div className={doc.h2}>Hover</div>
  <div className={doc.p}>
    Hover 是指鼠标移动到目标上的状态。Flavorcss
    帮我们做好了移动端兼容，在移动端的屏宽内，hover
    是不生效的，这有效提高了移动端的体验。
  </div>
  <CodeEditor className={doc.edit} codeClassName={doc.editCode}>
    {`
<div class="bg-teal-100 p-2xl">
<button class="hover:bg-indigo-500 shadow hover:shadow-lg flex-0-0 pc:mb-lg p-xl py-md bg-indigo-400 c-white radius-md cursor-pointer transition-700">
Hover Me
</button>
</div>
`}
  </CodeEditor>
  <div className={doc.p}>
    在上面的示例中，我们鼠标焦距 button，可以看到 background 和 shadow
    的变化：
  </div>
  <div className={doc.li}>
    1. 我们使用 shadow 和 hover:shadow-lg 的组合完成了hover样式
  </div>
  <div className={doc.li}>
    2. 我们使用 transition-700 设置了动画时长
  </div>
  </>
}

function Active(){
  return <>
    <div className={doc.h2}>Active</div>
        <div className={doc.p}>
          Active 是指鼠标或手指点击到目标上的状态
        </div>
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>
          {`
<div class="bg-teal-100 p-2xl">
<div class="row pc:col mx-auto max-w-5xl p-xl bg-white radius-lg shadow-xl shadow-indigo-900 shadow-opacity-5 row center-center">
<img class="active:scale-120 pc:active:rotate--20 transition-500 w-3xl h-3xl cursor-pointer" src="/static/imgs/msg2.svg" alt="ChitChat Logo">
</div>
</div>
    `}
        </CodeEditor>
        <div className={doc.p}>
          点击消息图标，桌面端会缩放并且旋转20度，移动端仅仅会缩放
        </div>
        <div className={doc.li}>
          1. 这里我们使用了 active: 伪类
        </div>
        <div className={doc.li}>2. 我们尝试了 pc:active: 进行媒体查询和伪类的组合</div>
  </>
}


function Focus(){
  return <>
    <div className={doc.h2}>Focus</div>
        <div className={doc.p}>
          Focus 是目标被聚焦的状态
        </div>
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>
          {`
<div class="bg-teal-100 p-2xl">
<div class="row pc:col mx-auto max-w-5xl p-xl bg-white radius-lg shadow-xl shadow-indigo-900 shadow-opacity-5 row center-center">
<input class="px-sm b-px b-teal-200 radius-sm h-2xl hover:b-indigo-300 active:b-red-600 focus:b-xs focus:b-indigo-500 focus:shadow-xl transition-400 placeholder-teal-300" placeholder="Place focus" />
</div>
</div>
    `}
        </CodeEditor>
        <div className={doc.p}>
          点击消息图标，桌面端会缩放并且旋转20度，移动端仅仅会缩放
        </div>
        <div className={doc.li}>
          1. 这里我们使用了 focus: 伪类，设定当输入框被聚焦时，设定鲜艳的border和shadow
        </div>
        <div className={doc.li}>2. 我们同时设定了 hover、focus、active 伪类，在 Flavorcss 的设计中，hover 会被 focus 覆盖, focus 会被 active 覆盖，这是符合直觉UX逻辑 </div>
  </>
}


function Group(){
  return <>
    <div className={doc.h2}>Group</div>
        <div className={doc.p}>
          Group 是指当父元素被用户交互，可以将相应的伪类传递给子元素
        </div>
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>
          {`
<div class="bg-teal-100 p-2xl">
<div class="group hover:b-opacity-100 b-xs b-indigo-300 b-opacity-0 row pc:col mx-auto max-w-5xl p-xl bg-white radius-lg shadow-xl shadow-indigo-900 shadow-opacity-5 row center-center">
<img class="group:hover:scale-120 group:active:rotate--20 transition-500 w-3xl h-3xl cursor-pointer" src="/static/imgs/msg2.svg" alt="ChitChat Logo">
</div>
</div>
    `}
        </CodeEditor>
        <div className={doc.p}>
          当我们鼠标移入卡片并点击，我们卡片和卡片内的 img 元素都相应了 hover 和 active
        </div>
        <div className={doc.li}>
          1. 这里我们使用了 group 类添加给父类，以激活它属性下的所有子元素可以使用 group: 伪类
        </div>
        <div className={doc.li}>2. 我们在子元素设定 group:hover: 以响应父元素的 hover 事件</div>
        <div className={doc.li}>3. group 使用的是 css 纯选择器实现，会对所有子代生效，所以建议 group 仅用在子代层级有限的元素上</div>
        <div className={doc.li}>4. group 无法和 pc: 媒体查询组合，原因是这种需求要求非常少，为了提高编译性能并未添加此组合</div>
  </>
}

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>伪类</h1>
        <div className={doc.p}>Flavorcss 设计了丰富的伪类，并且设计好了他们之间的关系</div>
        <div className={doc.section}>在 Flavorcss 中，所有 Atmoic Class 都有以下伪类</div>
        <Hover />
        <Active />
        <Focus />
        <Group />
        <div className={doc.h2}>其他伪类</div>
        <div className={doc.p}>我们常见的伪类还有 first-child、 child-child、 odd，Flavorcss 为了提高编译性能也为做这些伪类的实现，原因是现代前端开发，列表一般是通过 list 遍历所得，我们很自然的可以在 js 层面获得 first、child、odd 等逻辑判断。Flavorcss 舍弃这些伪类，可以节约30%的编译时间。</div>
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
