import DocumentLayout from "./DocumentLayout";
import { DocCode, DocH1, DocP, DocPage, DocPre } from "components/Doc";
import CodeEditor from "components/CodeEditor";

const cssSec =
  "my-8 bg-indigo-100 p-6 bl-6 br-6 radius-2 b-indigo-200 text-indigo-900 ";
const cssSpan = "fs-30 px-12 mx-4";

export default () => {
  return (
    <DocumentLayout nowUrl="/document">
      <DocPage>
        <DocH1>fbc 是一个CSS库/方案</DocH1>
        <DocP>
          fbc是在<b>页面加载时，编译原子类</b>的<DocCode>css</DocCode>方案。
        </DocP>
        <DocP>
          fbc可以大幅度减少我们项目的css代码量，减小最终样式文件体积，并且可以有效提高
          css 开发效率。
        </DocP>
        <DocP>
          当前这个网站就是使用 fbc 编写的，并且编写过程中，没有创建
          <DocCode>css/less/sass/styl</DocCode>
          等文件，也没有使用 css-in-js 等内联样式的方案。
        </DocP>
        <DocP>您需要的仅仅是在html中引用 fbc，它很小，只有6kb(gzip):</DocP>
        <DocPre>{`<script src="https://unpkg.com/fbc@0.4.0/umd/index.js"></script>`}</DocPre>
        <DocP>或使用 npm :</DocP>
        <DocPre>{`npm install --save fbc`}</DocPre>
        <DocH1>原子类CSS</DocH1>
        <DocP>
          CSS库我们可以分为两类，一类是大家常用的<DocCode>bootstrap</DocCode>
          <DocCode>bulma</DocCode>
        </DocP>
        <DocP>
          另一类是<DocCode>Atomic CSS</DocCode>风格的，其中最广为人喜爱的是
          <DocCode>Tailwind CSS</DocCode>.
        </DocP>
        <DocP>
          本文档有着一个极简的交互编程工具，在下面的尝试中，你可以体会到原子类编写样式的高效，在面向开发者的体验方面，它是有一定价值的。
        </DocP>
        <DocP>这是一个带一点点性感的按钮：</DocP>
        <CodeEditor
          wrap
          theme="dracula"
          className="col-r"
          codeClassName="bg-gray-900 p-12 radius-2 bl-4 br-4 b-gray-700"
        >{`
<!-- 我们随意修改下面的样式, 实时更新这个按钮，例如，我们把 px-16 改为 px-32-->
<button class="
  px-16 py-8 radius-4 m-24 
  bg-blue-600 hover:bg-blue-500 active:bg-blue-400 
  shadow hover:shadow-lg 
  transform hover:move-y--1 active:move-y-0 
  text-white cursor-pointer an-500"
>hello</button>
        `}</CodeEditor>
        <div className="h-24"></div>
        <DocP>
          我们可以看到我们很随意的就创建了一个性感的按钮，并且可以很轻松的把它移动到任何项目中，我们只需要引入
          <DocCode>fbc.js</DocCode>
          ，然后拷贝这行 html 代码，使用在任何前端项目中即可
        </DocP>
        <DocP>
          刚开始有部分人会对这种写法感到困惑，我们这么多css类是什么意思？我们是回到了编写内联样式的时代么？
        </DocP>
        <DocP>
          首先我们回答一个它和内联样式的区别：内联样式无法直接编写媒体查询和伪类，而这些是我们编写响应式界面非常频繁的操作。
        </DocP>
        <DocP>
          关于更深层次问题，各CSS社区有许多讨论，这里有一篇比较深刻的文章描述:
          <a
            className="text-teal-500 px-8 underline"
            href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/"
          >
            CSS Utility Classes and "Separation of Concerns"
          </a>
        </DocP>
        <DocP>
          我对于这类问题有一个非常好的答案，你可以跟着后面的实例试着写一些组件，感受一下，如果你感觉你爱上了它，那么请抛开偏见，享受它。若你并没有特殊的感觉，可以带着自己的意见离开。前端之所以有这么多方案，大部分原因是许多人想用自己更喜欢的方式去工作。
        </DocP>
        <DocH1>
          为什么使用 <DocCode>fbc</DocCode> ？
        </DocH1>
        <DocP>
          <DocCode>fbc</DocCode>
          就是因为使用<DocCode>Tailwind CSS</DocCode>
          <DocCode>fbc</DocCode> 诞生的目的是为了解决
          <DocCode>TailwindCSS</DocCode>
          面临的一个关键问题：<b>我们如何确定原子类个数的边界？</b>
        </DocP>
        <DocP>我们详细分析这个问题：</DocP>
        <DocP>
          <div className={cssSec}>
            <span className={cssSpan}>1.</span>
            若预先定义的原子类太少，我们在编写样式过程中，还需要不断去定义基础的css对象，或者创建一个
            css
            文件，去处理特定样式，此时就违背了我们的初衷，我们还需要编写一部分
            css 文件，样式的书写风格也变成了两份。
          </div>
          <div className={cssSec}>
            <span className={cssSpan}>2.</span>
            若预先定义的原子类过多，我们的css体积很轻松就可以突破 1000-1500 kb
            (在gzip之前),
            哪怕我们仅用5种颜色，去除大部分媒体查询，仅用一小部分伪类和一小部分样式组合伪类，我们也会有
            600kb 的css体积。要知道，多少项目费时费力移除 lodash
            也仅仅是为了节约150kb(gzip之前)的体积。通过尝试，如果我们要满足绝大部分样式常见，不编写95%的样式，使用原子类的方式我们大概需要
            3500kb 的 css，这显然是不可接受的。
          </div>
          <div className={cssSec}>
            <span className={cssSpan}>3.</span>
            使用 Purgecss 去清理未使用的 CSS, 这也是有代价的，我们需要注意 class
            的书写方式，如果我们使用变量的方式动态创建className， Purgecss
            就无法在编译期间通过正则找到我们使用过的此类
            css。并且我们携带着庞大的 css 体积，在编译期间增加了不少开销。
          </div>
        </DocP>
        <DocP>
          相信如果你真正长时间使用 Tailwind CSS
          就会遇到以上问题，并且会非常痛苦：
          <span className="bg-pink-500 text-white p-4 radius-4">
            明明遇到真爱，却不能在一起。
          </span>
        </DocP>
        <DocP>
          <div className="py-12 fs-lg fw-700">
            <DocCode>fbc</DocCode>的含义是 full-build-css, 它的解决方案是：
          </div>
        </DocP>
        <DocP>
          <div className={cssSec}>
            <span className={cssSpan}>1.</span>在 html 的 head 中加载 fbc
            (6kb-gzip), fbc 会逐步的编译 css，最终创建绝大部分我们所需的原子类。
          </div>
          <div className={cssSec}>
            <span className={cssSpan}>2.</span>
            fbc 会阻塞渲染，花费大约 70ms
            创建所有布局相关的原子类，包括媒体查询，大约840kb 的 css
            代码；然后常规渲染页面，此时我们不会就好像将 css 文件放在 head
            引入一样，用户不会看到页面有布局闪动的变化
          </div>
          <div className={cssSec}>
            <span className={cssSpan}>3.</span>
            紧接着 fbc 花费大约 70ms 创建 hover 相关的伪类，大约有770kb的 css
            代码，用户这时候鼠标交互页面能看到相应的相应。
          </div>
          <div className={cssSec}>
            <span className={cssSpan}>4.</span>
            fbc 会延迟 600ms，花费大约 250ms，创建
            active、focus、group（跨层级的组合伪类）、结合媒体查询的伪类等复杂原子类，这是非常庞大的原子类，大约有
            3100kb 的 css 代码，用户这时候鼠标点击按钮能看到点击的样式。
          </div>
        </DocP>

        <div className="h-24"></div>
        <DocP>
          而用户在第70ms之后就可以立即访问到页面；总共460ms的计算时常，最终创建了大概
          4500 kb 的 css
          代码，整个过程用户是无感知的。包含了成千上万种颜色、透明度、尺寸、媒体查询、伪类的组合，并且都以
          css values
          的方式运作，我们可以随意的覆盖基础变量，足以满足绝大部分样式的需求，你现在访问的这个网站是完全是用
          fbc 风格编写的。
        </DocP>
        <DocH1>为什么没有使用 web-worker 来提高编译性能？</DocH1>
        <DocP>
          其实在整个 css 编译的过程，css
          代码块的生成仅用了15-20%的时间，绝大部分的时间的开销在css插入上，web-worker
          并不能提供什么较大的帮助。
        </DocP>
        <DocP>
          fbc
          尝试了许多方案和配置，最终在css覆盖和初始开销上选择了一个相对合适的边界，其实整个css编译过程用户并不能明显感知到。为此，我们放弃了一些
          first-child、last-child、odd-child 等伪类，因为这些我们在使用 react 或
          vue 的时候，可以很容易判断得到。
        </DocP>
        <div className="h-100"></div>
      </DocPage>
    </DocumentLayout>
  );
};
