import doc from "components/Doc";
import Layout from "./Layout";
import DocumentTry from "pages/components/DocumentTry";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Justify Contnet - Align Items</h1>
        <p className={doc.p}>
          Justify Content 和 Align Items 基本都是成对出现，和 object-position:
          25% 50% 的概念相同，我们将他们设置为组合的 Atomic Class
        </p>
        <p className={doc.p}>
          下文的 ？表示可以相互组合，如： start-start, between-end, center-center
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
              [
                ".start-?",
                "justify-content: flex-start; align-items: ?",
              ],
              [".center-?", "justify-content: center; align-items: ?"],
              [".end-?", "justify-content: flex-end; align-items: ?"],
              [
                ".between-?",
                "justify-content: space-between; align-items: ?",
              ],
              [
                ".around-?",
                "justify-content: space-around; align-items: ?",
              ],
              [
                ".?-start",
                "justify-content: ?; align-items: flex-start",
              ],
              [".?-center", "justify-content: ?; align-items: center"],
              [".?-end", "justify-content: ?; align-items: flex-end"],
              [
                ".?-baseline",
                "justify-content: ?; align-items: baseline",
              ],
              [
                ".?-auto",
                "justify-content: ?; align-items: auto",
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
        <DocumentTry />
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
