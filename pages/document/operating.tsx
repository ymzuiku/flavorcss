import doc from "components/doc";
import Layout from "./Layout";
import pkg from "package.json";
import Code from "components/Code";


export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>提前编译方案</h1>
        <p className={doc.p}>
          flavorcss 默认使用的是提前编译方案，提前编译指在 flavorcss 脚本加载时，进行分段编译，总共会编译大约 3.5MB 的 css。
          </p>
        <div className={doc.p}>
          我们假定我们在 {`<head />`} 中引用了 Flavorcss：
        </div>

        <div className="h-24"></div>
        <p className={doc.p}>
          以上运行耗时，以：
          <span className={doc.code}>
            MacBook Pro (15-inch, 2016) - 2.9 GHz Quad-Core Intel Core i7
          </span>{" "}
          机型为参考标准
        </p>
        <h1 className={doc.h2}>web-worker 能提高编译性能么？</h1>
        <p className={doc.p}>
          其实在整个 css 编译的过程，css
          代码块的生成仅用了15-20%的时间，绝大部分的时间的开销在css插入上，web-worker
          并不能操作 DOM，所以并不能提供什么帮助。
        </p>
        <p className={doc.p}>
          Flavorcss
          尝试了许多方案和配置，最终在css覆盖和初始开销上选择了一个相对合适的边界。
        </p>
        <h1 className={doc.h2}>我们应该接受这个编译开销么？</h1>
        <p className={doc.p}>首先，我们推荐使用动态编译方案，它直接规避了这些开销。若我们要更面向开发者才使用提前编译方案</p>
        <p className={doc.p}>
          整个编译过程共计 170ms， 被切割成了共 6
          个宏任务，并不会阻塞用户行为。所以用户是无法感知这部分开销的，就好像您浏览这个网站一样，你刷新页面，并无法感知css样式的加载或编译阻塞。
        </p>
        <p className={doc.p}>
          同时在上文提到：
          <b>
            其实在整个 css 编译的过程，css
            代码块的生成仅用了15-20%的时间，绝大部分的时间的开销在css插入上.
          </b>
        </p>
        <p className={doc.p}>
          也就是说，编译仅仅消耗了 40ms，剩下的 130ms
          是css插入和浏览器解析样式的开销；所以只要我们希望使用庞大的原子类，就无法规避浏览器解析大量原子类的开销。
        </p>
        <p className={doc.p}>
          而现实情况是，考虑网络条件，大部分时候 Flavorcss 会比传统大型 web
          应用对样式的加载更快。
        </p>
        <h1 className={doc.h1}>动态编译方案</h1>
        <p className={doc.p}>
          如果我们使用前端框架如 React，我们可以在所有 className 上包裹一层运算方法，若运算方法中包含 flavorcss 约定的 class，并且样式表中并无此样式，就会动态创建该样式。
        </p>
        <div className={doc.p}>
          动态创建该样式的开销是非常低的，此文档一共的开销是 17ms ，平均每创建10组样式的开销应该 1ms 内，并且规避了重复样式的创建，足够满足我们对性能的要求。对初始化性能有严格要求的推荐使用此方案。
        </div>
        <p className={doc.p}>
          动态编译例子：
        </p>
        <Code className={[doc.pre, "mini-scrollbar"].join(" ")}>{`
import React from 'react';
import css from 'flavorcss/umd/css';

export default ()=>{
  return <div className={css\`bg-red-500 fs-xl\`}>
    Hello Flavorcss
  </div>
}
        `}</Code>
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
