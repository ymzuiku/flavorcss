import doc from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>运行机制</h1>
        <p className={doc.p}>
          <span className="fw-700">
            <span className={doc.code}>fbc</span>的含义是 full-build-css
          </span>
          , 指在加载过程中，编译获得大量精心设计的原子类样式，从而达到减少大量
          css 代码和更高效编写样式的目的。
        </p>
        <div className={doc.p}>我们假定我们在 {`<head />`} 中引用了 fbc：</div>
        <div className={doc.p}>
          <div className={doc.section}>
            <span className={doc.sectionSpan}>1.</span>在 html 的 head 中加载
            fbc (6kb-gzip), fbc 会逐步的编译
            css，最终创建绝大部分我们所需的原子类。
          </div>
          <div className={doc.section}>
            <span className={doc.sectionSpan}>2.</span>
            根据浏览器机制，刚开始 fbc 会阻塞渲染，花费大约 30ms
            创建所有布局相关的原子类，包括媒体查询，大约370kb 的 css
            代码；然后常规渲染页面，这个目的是为了用户不会看到页面有布局闪动的变化
          </div>
          <div className={doc.section}>
            <span className={doc.sectionSpan}>3.</span>
            fbc 在下一个macrotasks, 花费大约 25ms 创建 hover
            相关的伪类，大约有330kb的 css
            代码，用户这时候鼠标交互页面能看到相应的相应。
          </div>
          <div className={doc.section}>
            <span className={doc.sectionSpan}>4.</span>
            fbc 在下一个macrotasks, fbc 花费大约 90ms 创建
            active、focus、group（跨层级的组合伪类）、结合媒体查询的伪类等复杂原子类，这是非常庞大的原子类，大约有
            1800kb 的 css 代码。
          </div>
          <div className={doc.section}>
            <span className={doc.sectionSpan}>5.</span>
            延迟 100ms 之后，fbc 在下一个macrotasks，然后再花费大约
            100ms，创建除了group之外的所有原子类的 !important 属性
          </div>
          <div className={doc.section}>
            <span className={doc.sectionSpan}>6.</span>
            fbc 在下一个macrotasks，若 DOM 中有 id = fbc
            的元素，会判断其 use-child 属性，若属性指为真，花费大概 70ms 创建 first-child、last-child、odd-child
            相关伪类。
          </div>
        </div>

        <div className="h-24"></div>
        <p className={doc.p}>
          而用户在第30ms之后就可以立即访问到页面样式和布局；然后在接下来的大约300ms中
          3500 kb 的 css
          代码，整个过程用户是无感知的。包含了成千上万种颜色、透明度、尺寸、媒体查询、伪类的组合，并且都以
          css values
          的方式运作，我们可以随意的覆盖基础变量，足以满足绝大部分样式的需求，你现在访问的这个网站是完全是用
          fbc 风格编写的。
        </p>
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
          fbc
          尝试了许多方案和配置，最终在css覆盖和初始开销上选择了一个相对合适的边界，其实整个css编译过程用户并不能明显感知到。为此，我们放弃了一些
          first-child、last-child、odd-child 等伪类
          的可选创建，所以尽量不要在首页使用以上伪类设定变化明显的布局。
        </p>
        <div className={doc.footerSpace}></div>
      </main>
    </Layout>
  );
};
