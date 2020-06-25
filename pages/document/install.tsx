import doc from "components/doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";
import pkg from "package.json";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Install</h1>
        <p className={doc.p}>Flavorcss 很小，只有6kb(gzip)</p>
        <h2 className={doc.h2}>使用CDN</h2>
        <p className={doc.p}>在html {`<head />`}中引用 Flavorcss:</p>
        <CodeEditor
          notRender
        >{`
<!-- flavorcss-effect="true" 指创建有全局影响的样式 -->
<script flavorcss-effect="true" src="https://unpkg.com/flavorcss@${pkg.version}/umd/index.js"></script>
        `}</CodeEditor>
        <p className={doc.p}>
          注意，建议在body渲染之前引用 Flavorcss 脚本，所以把 引用脚本放在 head
          中而不是 body 的底部，Flavorcss
          脚本非常小，这样可以有效减少页面因缺少样式而导致的页面抖动。
        </p>
        <h2 className={doc.h2}>使用 npm</h2>
        <CodeEditor notRender>{`npm install --save flavorcss`}</CodeEditor>
        然后在项目中引用：
        <CodeEditor notRender>{`import 'flavorcss'`}</CodeEditor>
      </main>
    </Layout>
  );
};
