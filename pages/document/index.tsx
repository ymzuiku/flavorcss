import CodeEditor from "components/CodeEditor";
import Layout from "./Layout";
import doc from "components/doc";
import Link from "next/link";
import Code from "components/Code";

const cssSec =
  "my-sm bg-indigo-100 p-sm bl-sm br-sm radius-sm b-indigo-200 c-indigo-900 ";
const cssSpan = "fs-2xl px-sm mx-xs";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>flavorcss 是一个CSS库/方案</h1>
        <p className={doc.p}>
          flavorcss 是在<b>页面加载时，编译原子类</b>的
          <code className={doc.code}>css</code>
          方案。
        </p>
        <p className={doc.p}>
          flavorcss
          可以大幅度减少我们项目的css代码量，减小最终样式文件体积，并且可以有效提高
          css 开发效率。
        </p>
        <p className={doc.p}>
          当前这个网站就是使用 flavorcss 编写的，并且编写过程中，没有创建
          <code className={doc.code}>css/less/sass/styl</code>
          等文件，也没有使用 css-in-js 等内联样式的方案。
        </p>
        <p className={doc.p}>
          您需要的仅仅是在html中引用 flavorcss，它很小，只有6kb(gzip):
        </p>
        <Code
          className={doc.pre}
        >{`<script src="https://unpkg.com/flavorcss@0.2.0/umd/index.js"></script>`}</Code>
        <p className={doc.p}>之后就可以在项目中使用成千上万个 Atomic Class</p>
        <h1 className={doc.h1}>原子类CSS</h1>
        <p className={doc.p}>
          CSS库我们可以分为两类，一类是大家常用的
          <code className={doc.code}>bootstrap</code>
          <code className={doc.code}>bulma</code>
        </p>
        <div className={doc.p}>
          另一类是<code className={doc.code}>Atomic CSS</code>
          风格的，其中最广为人喜爱的是
          <code className={doc.code}>Tailwind CSS</code>.
        </div>
        <p className={doc.p}>
          本文档有着一个极简的交互编程工具，在下面的尝试中，你可以体会到原子类编写样式的高效，在面向开发者的体验方面，它是有一定价值的。
        </p>
        <p className={doc.p}>这是一个带一点点性感的按钮：</p>
        <CodeEditor
          wrap
          theme="dark"
          className="col-r"
          codeClassName="bg-gray-900 p-md radius-sm bl-sm br-sm b-gray-700"
        >{`
<!-- 我们随意修改下面的样式, 实时更新这个按钮，例如，我们把 px-16 改为 px-32-->
<button class="
  px-lg py-sm radius-sm m-lg 
  bg-blue-600 hover:bg-blue-500 active:bg-blue-400 
  shadow hover:shadow-lg 
  transform hover:move-y--px active:move-y-px 
  c-white cursor-pointer transition-500"
>hello</button>
        `}</CodeEditor>
        <div className="h-lg"></div>
        <div className={doc.p}>
          我们可以看到我们很随意的就创建了一个性感的按钮，并且可以很轻松的把它移动到任何项目中，我们只需要引入
          <code className={doc.code}>flavorcss.js</code>
          ，然后拷贝这行 html 代码，使用在任何前端项目中即可
        </div>
        <p className={doc.p}>
          刚开始有部分人会对这种写法感到困惑，我们这么多css类是什么意思？我们是回到了编写内联样式的时代么？我们不应该遵守关注点分离原则么？
        </p>
        <p className={doc.p}>
          首先我们回答一个它和内联样式的区别：内联样式无法直接编写媒体查询和伪类，而这些是我们编写响应式界面非常频繁的操作。
        </p>
        <p className={doc.p}>
          关于更深层次问题，各CSS社区有许多讨论，这里有一篇比较深刻的文章描述:
          <a
            className="c-primary-500 px-8 underline"
            href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/"
          >
            CSS Utility Classes and "Separation of Concerns"
          </a>
        </p>
        <p className={doc.p}>
          我对于这类问题有一个非常好的答案，你可以跟着后面的实例试着写一些组件，感受一下，如果你感觉你爱上了它，那么请抛开偏见，享受它。若你并没有特殊的感觉，可以带着自己的意见离开。前端之所以有这么多方案，大部分原因是许多人想用自己更喜欢的方式去工作。
        </p>
        <h1 className={doc.h1}>
          为什么使用 <code className={doc.code}>flavorcss</code> ？
        </h1>
        <p className={doc.p}>
          <code className={doc.code}>flavorcss</code>
          就是因为使用<code className={doc.code}>Tailwind CSS</code>
          <code className={doc.code}>flavorcss</code> 诞生的目的是为了解决
          <code className={doc.code}>TailwindCSS</code>
          面临的一个关键问题：<b>我们如何确定原子类个数的边界？</b>
        </p>
        <p className={doc.p}>我们详细分析这个问题：</p>
        <div className={doc.p}>
          <div className={doc.section}>
            <span className={doc.sectionSpan}>1.</span>
            若预先定义的原子类太少，我们在编写样式过程中，还需要不断去定义基础的css对象，或者创建一个
            css
            文件，去处理特定样式，此时就违背了我们的初衷，我们还需要编写一部分
            css 文件，样式的书写风格也变成了两份。
          </div>
          <div className={doc.section}>
            <span className={doc.sectionSpan}>2.</span>
            若预先定义的原子类过多，我们的css体积很轻松就可以突破 1000-1500 kb
            (在gzip之前),
            哪怕我们仅用5种颜色，去除大部分媒体查询，仅用一小部分伪类和一小部分样式组合伪类，我们也会有
            600kb 的css体积。要知道，多少项目费时费力移除 lodash
            也仅仅是为了节约150kb(gzip之前)的体积。通过尝试，如果我们要满足绝大部分样式常见，不编写95%的样式，使用原子类的方式我们大概需要
            2500kb 的 css，这显然是不可接受的。
          </div>
          <div className={doc.section}>
            <span className={doc.sectionSpan}>3.</span>
            使用 Purgecss 去清理未使用的 CSS, 这也是有代价的，我们需要注意 class
            的书写方式，如果我们使用变量的方式动态创建className， Purgecss
            就无法在编译期间通过正则找到我们使用过的此类
            css。并且我们携带着庞大的 css 体积，在编译期间增加了不少开销。
          </div>
        </div>
        <div className={doc.p}>
          相信如果你真正长时间使用 Tailwind CSS
          就会遇到以上问题，并且会非常痛苦：
          <span className="bg-pink-500 c-white p-4 radius-4">
            明明遇到真爱，却不能在一起。
          </span>
        </div>
        <div className="h-24"></div>
        <p className={doc.p}>
          而 flavorcss 的方案很好的规避了<b>如何确定原子类个数的边界</b>
          这个问题，flavorcss 是在运行时逐步编译绝大部分 Atomic Class,
          并且整个编译和插入过程做了很好的分段编译，让用户无感知，整个页面加载也不会有明显的从无样式至有样式的可见布局变化。具体可以查看
          <Link href="/document/operating">
            <a>运行机制</a>
          </Link>
        </p>
        <div className="h-100"></div>
      </main>
    </Layout>
  );
};
