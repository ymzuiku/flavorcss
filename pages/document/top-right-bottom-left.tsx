import doc from "components/Doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";
import getUnitList from "utils/getUnitList";


export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Top / Right / Bottom / Left</h1>
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
              [".inset-0", "top: 0; right: 0; bottom: 0; left: 0;"],
              [".inset-y-0", "top: 0; bottom: 0;"],
              [".inset-x-0", "left: 0; right: 0;"],
              ["以下属性 right，bottom，left 均支持:", ""],
              ...getUnitList('top'),
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
