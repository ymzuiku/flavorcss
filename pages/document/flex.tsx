import doc from "components/Doc";
import Layout from "./Layout";
import DocumentTry from "pages/components/DocumentTry";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Flex</h1>
        <p className={doc.p}>
          flex
          的属性看着很多，其实是有规律的，下表中，除了flex-none,flex-1,flex-0;
          剩余的都是排列组合：
        </p>
        <p className={doc.p}>
          其中 flex-grow 是从 0-12 分为12份，flex-shrink 是0-1，flex-basis 是 0%
          和 auto。
        </p>
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
              [".flex-none", "flex: none;"],
              [".felx-1", "flex: 1 1 0;"],
              [".flex-0", "flex: 0 1 auto;"],
              [".flex-1-0", "flex: 1 0 0%;"],
              [".flex-2-0", "flex: 2 0 0%;"],
              [".flex-3-0", "flex: 3 0 0%;"],
              [".flex-4-0", "flex: 4 0 0%;"],
              [".flex-5-0", "flex: 5 0 0%;"],
              [".flex-6-0", "flex: 6 0 0%;"],
              [".flex-7-0", "flex: 7 0 0%;"],
              [".flex-8-0", "flex: 8 0 0%;"],
              [".flex-9-0", "flex: 9 0 0%;"],
              [".flex-10-0", "flex: 10 0 0%;"],
              [".flex-11-0", "flex: 11 0 0%;"],
              [".flex-12-0", "flex: 12 0 0%;"],
              [".flex-1-1", "flex: 1 1 0%;"],
              [".flex-2-1", "flex: 2 1 0%;"],
              [".flex-3-1", "flex: 3 1 0%;"],
              [".flex-4-1", "flex: 4 1 0%;"],
              [".flex-5-1", "flex: 5 1 0%;"],
              [".flex-6-1", "flex: 6 1 0%;"],
              [".flex-7-1", "flex: 7 1 0%;"],
              [".flex-8-1", "flex: 8 1 0%;"],
              [".flex-9-1", "flex: 9 1 0%;"],
              [".flex-10-1", "flex: 10 1 0%;"],
              [".flex-11-1", "flex: 11 1 0%;"],
              [".flex-12-1", "flex: 12 1 0%;"],
              [".flex-1-0-auto", "flex: 1 0 auto;"],
              [".flex-2-0-auto", "flex: 2 0 auto;"],
              [".flex-3-0-auto", "flex: 3 0 auto;"],
              [".flex-4-0-auto", "flex: 4 0 auto;"],
              [".flex-5-0-auto", "flex: 5 0 auto;"],
              [".flex-6-0-auto", "flex: 6 0 auto;"],
              [".flex-7-0-auto", "flex: 7 0 auto;"],
              [".flex-8-0-auto", "flex: 8 0 auto;"],
              [".flex-9-0-auto", "flex: 9 0 auto;"],
              [".flex-10-0-auto", "flex: 10 0 auto;"],
              [".flex-11-0-auto", "flex: 11 0 auto;"],
              [".flex-12-0-auto", "flex: 12 0 auto;"],
              [".flex-1-1-auto", "flex: 1 1 auto;"],
              [".flex-2-1-auto", "flex: 2 1 auto;"],
              [".flex-3-1-auto", "flex: 3 1 auto;"],
              [".flex-4-1-auto", "flex: 4 1 auto;"],
              [".flex-5-1-auto", "flex: 5 1 auto;"],
              [".flex-6-1-auto", "flex: 6 1 auto;"],
              [".flex-7-1-auto", "flex: 7 1 auto;"],
              [".flex-8-1-auto", "flex: 8 1 auto;"],
              [".flex-9-1-auto", "flex: 9 1 auto;"],
              [".flex-10-1-auto", "flex: 10 1 auto;"],
              [".flex-11-1-auto", "flex: 11 1 auto;"],
              [".flex-12-1-auto", "flex: 12 1 auto;"],
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
