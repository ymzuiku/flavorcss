import doc from "components/doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";
import DocumentTry from "pages/components/DocumentTry";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Background Position</h1>
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
              [".bg-0-0", "background-position: 0% 0%;"],
              [".bg-0-25", "background-position: 0% 25%;"],
              [".bg-25-0", "background-position: 25% 0%;"],
              [".bg-25-25", "background-position: 25% 25%;"],
              [".bg-0-50", "background-position: 0% 50%;"],
              [".bg-50-0", "background-position: 50% 0%;"],
              [".bg-50-50", "background-position: 50% 50%;"],
              [".bg-0-75", "background-position: 0% 75%;"],
              [".bg-75-0", "background-position: 75% 0%;"],
              [".bg-75-75", "background-position: 75% 75%;"],
              [".bg-0-100", "background-position: 0% 100%;"],
              [".bg-100-0", "background-position: 100% 0%;"],
              [".bg-100-100", "background-position: 100% 100%;"],
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

