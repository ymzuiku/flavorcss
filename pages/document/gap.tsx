import doc from "components/Doc";
import Layout from "./Layout";
import { getUnitLiList } from "utils/getUnitList";
import DocumentTry from "pages/components/DocumentTry";
import Link from "next/link";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Gap</h1>
        <p className={doc.p}>
          Gap 遵循通用单位，具体规则请查看{" "}
          <Link href="/document/util">
            <a>单位</a>
          </Link>
        </p>
        <p className={doc.p}>Gap有三个类型：gap, col-gap, row-gap, 下表仅仅是他们和通用单位的排列组合</p>
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
              ...getUnitLiList("gap"),
              ...getUnitLiList("col-gap"),
              ...getUnitLiList("row-gap"),
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
