import doc from "components/Doc";
import Layout from "./Layout";
import Code from "components/Code";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Install</h1>
        <p className={doc.p}>flavorcss 很小，只有6kb(gzip)</p>
        <h2 className={doc.h2}>使用CDN</h2>
        <p className={doc.p}>在html {`<head />`}中引用 flavorcss:</p>
        <Code
          className={doc.pre}
        >{`<script src="https://unpkg.com/flavorcss@0.2.0/umd/index.js"></script>`}</Code>
        <p className={doc.p}>
          注意，建议在body渲染之前引用 flavorcss 脚本，所以把 引用脚本放在 head 中而不是
          body
          的底部，flavorcss 脚本非常小，这样可以有效减少页面因缺少样式而导致的页面抖动。
        </p>
        <h2 className={doc.h2}>使用 npm</h2>
        <Code className={doc.pre}>{`npm install --save flavorcss`}</Code>
        然后在项目中引用：
        <Code className={doc.pre}>{`import 'flavorcss'`}</Code>
      </main>
    </Layout>
  );
};
