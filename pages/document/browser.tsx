import doc from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>浏览器支持</h1>
        <p className={doc.p}>
          <b>flavorcss</b> 并没有使用任何高级语法，所以浏览器的支持仅根据所使用的 css
          来进行判断。
        </p>
        <p className={doc.p}>
          css 原本特性的支持，参阅 <a href="https://caniuse.com">caniuse.com</a>{" "}
        </p>
        <div className={doc.footerSpace}></div>
      </main>
    </Layout>
  );
};
