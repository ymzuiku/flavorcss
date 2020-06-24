import doc from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>运行机制</h1>
        <p className={doc.p}>
          <span className="fw-700">
            <span className={doc.code}>flavorcss</span>的含义是 full-build-css
          </span>
          , 指在加载过程中，编译获得大量精心设计的原子类样式，从而达到减少大量
          css 代码和更高效编写样式的目的。
        </p>
        <div className={doc.p}>
          我们假定我们在 {`<head />`} 中引用了 flavorcss：
        </div>
        <div className={doc.p}>
          <div className={doc.section}>
            <span className={doc.sectionSpan}>1.</span>在 html 的 head 中加载
            flavorcss (6kb-gzip), flavorcss 会逐步的编译
            css，最终创建绝大部分我们所需的原子类。
          </div>
          <div className={doc.section}>
            <span className={doc.sectionSpan}>2.</span>
            根据浏览器机制，刚开始 flavorcss 会阻塞渲染，花费大约 30ms
            创建所有布局相关的原子类，包括媒体查询，大约350kb 的 css
            代码；然后常规渲染页面，这个目的是为了用户不会看到页面有布局闪动的变化
          </div>
          <div className={doc.section}>
            <span className={doc.sectionSpan}>3.</span>
            接下来 flavorcss 会执行 5
            个宏任务，每个任务持续12-25ms(接近人类延迟感知的16.7ms)、间隔50ms，flavorcss
            会创建非常庞大的原子类，大约有 2100kb 的 css
            代码，包含了精心设计的成千上万种颜色、透明度、尺寸、媒体查询、伪类的组合，并且都以
            css values
            的方式运作，我们可以随意的覆盖基础变量，足以满足绝大部分样式的需求。
          </div>
        </div>
        <p className={doc.p}>
          除去宏任务的间隔时间，flavorcss 所有运行共消耗270ms
        </p>
        <div className="h-24"></div>
        <p className={doc.p}>
          以上运行耗时，以：
          <span className={doc.code}>
            MacBook Pro (15-inch, 2016) - 2.9 GHz Quad-Core Intel Core i7
          </span>{" "}
          机型为参考标准
        </p>
        <h1 className={doc.h1}>web-worker 能提高编译性能么？</h1>
        <p className={doc.p}>
          其实在整个 css 编译的过程，css
          代码块的生成仅用了15-20%的时间，绝大部分的时间的开销在css插入上，web-worker
          并不能操作 DOM，所以并不能提供什么帮助。
        </p>
        <p className={doc.p}>
          flavorcss
          尝试了许多方案和配置，最终在css覆盖和初始开销上选择了一个相对合适的边界。
        </p>
        <h1 className={doc.h1}>我们应该接受这个编译开销么？</h1>
        <p className={doc.p}>
          整个编译过程共计 120ms， 被切割成了共 6
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
          也就是说，编译仅仅消耗了 20ms，剩下的 100ms
          是css插入和浏览器解析样式的开销；所以只要我们希望使用庞大的原子类，就无法规避浏览器解析大量原子类的开销。
        </p>
        <p className={doc.p}>
          而现实情况是，考虑网络条件，大部分时候 flavorcss 会比传统大型 web
          应用对样式的加载更快。
        </p>
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
