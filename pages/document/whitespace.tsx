import doc from "components/Doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";
import DocumentTry from "pages/components/DocumentTry";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Whitespace</h1>
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
              [".whitespace-normal", "white-space: normal;"],
              [".whitespace-nowrap", "white-space: nowrap;"],
              [".whitespace-pre", "white-space: pre;"],
              [".whitespace-pre-line", "white-space: pre-line;"],
              [".whitespace-pre-wrap", "white-space: pre-wrap;"],
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
        <DocumentTry />
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
