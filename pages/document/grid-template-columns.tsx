import doc from "components/Doc";
import Layout from "./Layout";
import DocumentTry from "pages/components/DocumentTry";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Grid Template columns</h1>
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
              ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
                return [
                  `grid-cols-${i}`,
                  `grid-template-columns: repeat(${i}, minmax(0, 1fr));`,
                ];
              }),
              [`grid-cols-none`, `grid-template-columns: none`],
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
