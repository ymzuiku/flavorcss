import doc from "components/Doc";
import Layout from "./Layout";
import Code from "components/Code";
import CodeEditor from "components/CodeEditor";
import Link from "next/link";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Box Sizing</h1>
        <p className={doc.p}>
          flavorcss 在默认的 use-effect 设定中，将所有元素默认设置为：box-sizing:
          border-box。这个做法是参考 bootstrap，实际工作中证明，它的确可以带来很多便利。取消这类预设，可以参考：
          <Link href="/document/config">
            <a>自定义配置</a>
          </Link>
        </p>

        <table className="w-12/12 table-fixed">
          <thead>
            <tr>
              {["Class", "Properties"].map((v) => {
                return (
                  <th key={v} className={doc.th}>
                    {v}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {[
              [".border-box", "box-sizing: border-box"],
              [".content-box", "box-sizing: content-box"],
            ].map((item, a) => {
              return (
                <tr key={a}>
                  {item.map((v, i) => {
                    return (
                      <td key={i} className={doc.td}>
                        {v}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>{`
<div class="bg-gray-100 p-xl">
  <div class="border-box mx-auto h-3xl w-4xl  b-sm b-gray-400 bg-white"></div>
</div>

          `}</CodeEditor>
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
