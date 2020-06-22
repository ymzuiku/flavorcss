import doc from "components/Doc";
import Layout from "pages/document/Layout";
import DocumentTry from "pages/components/DocumentTry";

interface Props {
  title: string;
  info?: string[];
  list?: [string, string][];
}

export default ({ title, info, list }: Props) => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>{title}</h1>
        {info &&
          info.map((str) => {
            return (
              <p key={str} className={doc.p}>
                {str}
              </p>
            );
          })}
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
            {list && list.map((item, a) => {
              return (
                <tr key={a}>
                  {item && item.map((v, i) => {
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
