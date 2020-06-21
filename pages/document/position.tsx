import doc from "components/Doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Position</h1>
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
              [".static", "position: static;"],
              [".fixed", "position: fixed;"],
              [".absolute", "position: absolute;"],
              [".relative", "position: relative;"],
              [".sticky", "position: sticky;"],
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
        <p className={doc.h3}>您可以在下面的代码尝试以上属性</p>
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>{`
<div class="row center-center">
  <div class="bg-red-400 w-3xl h-3xl m-lg"></div>
  <div class="bg-blue-400 w-3xl h-3xl m-lg"></div>
</div>
          `}</CodeEditor>
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
