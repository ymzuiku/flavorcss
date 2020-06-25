import doc from "components/doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Floats</h1>
        <p className={doc.h3}>在下面的代码使用 Float 相关的类</p>
        <CodeEditor>{`
<div class="block p-xl border-box mx-auto h-4xl bg-white">
    <div class="float-left b-px p-sm b-gray-400 m-xs">Item 1</div>
    <div class="float-left b-px p-sm b-gray-400 m-xs">Item 2</div>
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
              [".float-right", "float: right"],
              [".float-left", "float: left"],
              [".float-none", "float: none"],
              [
                ".clearfix",
                `	&::after {
  content: "";
  display: table;
  clear: both;
}`,
              ],
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