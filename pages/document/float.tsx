import doc from "components/Doc";
import Layout from "./Layout";
import Code from "components/Code";
import CodeEditor from "components/CodeEditor";
import Link from "next/link";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Float</h1>
        <p className={doc.p}>
          fbc 在默认的 use-effect 设定中，将所有元素默认设置为：box-sizing:
          border-box。这个做法是参考
          bootstrap，实际工作中证明，它的确可以带来很多便利。取消这类预设，可以参考：
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
              [".none", "display: none"],
              [".block", "display: block"],
              [".flow-root", "display: flow-root"],
              [".flex", "display: flex"],
              [".inline-flex", "display: inline-flex"],
              [".grid", "display: grid"],
              [".table", "display: table"],
              [".table-caption", "display: table-caption"],
              [".table-cell", "display: table-cell"],
              [".table-column", "display: table-column"],
              [".table-column-group", "display: table-column-group"],
              [".table-footer-group", "display: table-footer-group"],
              [".table-header-group", "display: table-header-group"],
              [".table-row-group", "display: table-row-group"],
              [".table-row", "display: table-row"],
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
        <p className={doc.h3}>修改下面的代码，体验以下 display 相关的类</p>
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>{`
<div class="block p-xl border-box mx-auto h-4xl bg-white">
    <div class="b-px p-sm b-gray-400 bt-0 first:bt-px">Try</div>
    <div class="b-px p-sm b-gray-400 bt-0 first:bt-px">Use</div>
    <div class="b-px p-sm b-gray-400 bt-0 first:bt-px">Display</div>
</div>
          `}</CodeEditor>
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
