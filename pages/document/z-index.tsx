import doc from "components/doc";
import Layout from "./Layout";
import DocumentTry from "pages/components/DocumentTry";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Z-index</h1>
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
              [".z-0", "z-index: 0;"],
              [".z-10", "z-index: 10;"],
              [".z-20", "z-index: 20;"],
              [".z-30", "z-index: 30;"],
              [".z-40", "z-index: 40;"],
              [".z-50", "z-index: 50;"],
              [".z-60", "z-index: 60;"],
              [".z-70", "z-index: 70;"],
              [".z-80", "z-index: 80;"],
              [".z-90", "z-index: 90;"],
              [".z-100", "z-index: 100;"],
              [".z-auto", "z-index: auto;"],
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
