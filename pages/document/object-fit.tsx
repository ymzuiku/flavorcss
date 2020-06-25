import doc from "components/doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Object Fit</h1>
        <p className={doc.h3}>在下面的代码使用相关的 css 类</p>
        <CodeEditor>{`
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
              [".object-contain", "object-fit: contain;"],
              [".object-cover", "object-fit: cover;"],
              [".object-fill", "object-fit: fill;"],
              [".object-none", "object-fit: none;"],
              [".object-scale-down", "object-fit: scale-down;"],
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
