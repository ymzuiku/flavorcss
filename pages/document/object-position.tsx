import doc from "components/Doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Object Position</h1>
        <p className={doc.h3}>在下面的代码使用相关的 css 类</p>
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>{`
<div class="block p-md border-box mx-auto bg-white">
<img class="object-cover object-0-0 bg-gray-400 m-md w-4xl h-4xl mx-auto" src="/static/imgs/building.jpeg">
<img class="object-contain object-50-50 bg-gray-400 m-md w-4xl h-4xl mx-auto" src="/static/imgs/building.jpeg">
</div>
          `}</CodeEditor>
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
              [".object-0-0", "object-position: 0% 0%;"],
              [".object-0-25", "object-position: 0% 25%;"],
              [".object-25-0", "object-position: 25% 0%;"],
              [".object-25-25", "object-position: 25% 25%;"],
              [".object-0-50", "object-position: 0% 50%;"],
              [".object-50-0", "object-position: 50% 0%;"],
              [".object-50-50", "object-position: 50% 50%;"],
              [".object-0-75", "object-position: 0% 75%;"],
              [".object-75-0", "object-position: 75% 0%;"],
              [".object-75-75", "object-position: 75% 75%;"],
              [".object-0-100", "object-position: 0% 100%;"],
              [".object-100-0", "object-position: 100% 0%;"],
              [".object-100-100", "object-position: 100% 100%;"],
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
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
