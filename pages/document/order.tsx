import doc from "components/Doc";
import Layout from "./Layout";
import DocumentTry from "pages/components/DocumentTry";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Order</h1>
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
              [".order-first", "order: -9999;"],
              [".order-last", "order: 9999;"],
              [".order--2", "order: -2;"],
              [".order--1", "order: -1;"],
              [".order-0", "order: 0;"],
              [".order-1", "order: 1;"],
              [".order-2", "order: 2;"],
              [".order-3", "order: 3;"],
              [".order-4", "order: 4;"],
              [".order-5", "order: 5;"],
              [".order-6", "order: 6;"],
              [".order-7", "order: 7;"],
              [".order-8", "order: 8;"],
              [".order-9", "order: 9;"],
              [".order-10", "order: 10;"],
              [".order-11", "order: 11;"],
              [".order-12", "order: 12;"],

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
