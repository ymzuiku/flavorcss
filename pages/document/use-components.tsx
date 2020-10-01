import doc from "components/Doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";
import Code from "components/Code";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>提取组件</h1>
        <div className={doc.p}>
          使用 BEM 风格的css，可以天生的做好样式的封装, 但是 Atomic Class 风格的
          css 就不好处理这种情况。
        </div>
        <div className={doc.p}>
          Flavorcss
          并未对此做任何设计，但是我们建议您可以使用以下两种样式封装的方式:
        </div>
        <h1 className={doc.h2}>使用字符串变量封装样式</h1>
        <Code language="jsx" className={doc.editCode}>
          {`
const css = {
  page: 'mx-auto bg-white min-h-vh max-w-screen-md',
  info: 'fs-lg',
}
const Page = ()=>{
  return <div className={css.page} >
    <div className={css.info}>Hello</div>
    <div className={css.info}>Flavorcss</div>
  </div>
}
    `}
        </Code>
        <h1 className={doc.h2}>使用 React / Vue / Other 框架的组件进行封装</h1>
        <Code language="jsx" className={doc.editCode}>
          {`
const Card = ({title, info})=>{
  return <div className={css.page} >
    <div className={css.info}>{title}</div>
    <div className={css.info}>{info}</div>
  </div>
}

const Page = () => {
  return <Card title="Hello" info="Flavorcss" />
}
    `}
        </Code>
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
