import doc from "components/Doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Display</h1>
        <p className={doc.h3}>在下面的代码使用 Display 相关的类</p>
        <CodeEditor>{`
<div class="block p-xl border-box mx-auto h-4xl bg-white">
    <div class="b-px p-sm b-gray-400 bt-0 first:bt-px">Try</div>
    <div class="b-px p-sm b-gray-400 bt-0 first:bt-px">Use</div>
    <div class="b-px p-sm b-gray-400 bt-0 first:bt-px">Display</div>
</div>
          `}</CodeEditor>
        <table className="def w-12/12 table-fixed">
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
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
