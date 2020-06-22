import doc from "components/Doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Clear</h1>
        <p className={doc.h3}>在下面的代码使用 clear 相关的类</p>
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>{`
<div class="block p-xl border-box mx-auto h-4xl bg-white">
    <div class="float-left b-px p-sm b-gray-400 m-xs">Item 1</div>
    <div class="float-left clear-left b-px p-sm b-gray-400 m-xs">Item 2</div>
    <div class="float-right b-px p-sm b-gray-400 m-xs">Item 3</div>
</div>
          `}</CodeEditor>
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
              [".clear-right", "clear: right"],
              [".clear-left", "clear: left"],
              [".clear-both", "clear: both"],
              [".clear-none", "clear: none"],
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
