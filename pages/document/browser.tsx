import doc from "components/Doc";
import Layout from "./Layout";
import Code from "components/Code";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>浏览器支持</h1>
        <p className={doc.p}>fbc 支持最低到 ie8</p>
        <p className={doc.p}>css 原本特性的支持，参阅 <a href="https://caniuse.com">caniuse.com</a> </p>
      </main>
    </Layout>
  );
};
