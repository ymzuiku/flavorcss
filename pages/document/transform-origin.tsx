import doc from "components/doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Tranform Origin</h1>
        <p className={doc.h3}>在下面的代码使用 Object Position 相关的类</p>
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
              [".origin-0-0", "transform-origin: 0% 0%;"],
              [".origin-0-25", "transform-origin: 0% 25%;"],
              [".origin-25-0", "transform-origin: 25% 0%;"],
              [".origin-25-25", "transform-origin: 25% 25%;"],
              [".origin-0-50", "transform-origin: 0% 50%;"],
              [".origin-50-0", "transform-origin: 50% 0%;"],
              [".origin-50-50", "transform-origin: 50% 50%;"],
              [".origin-0-75", "transform-origin: 0% 75%;"],
              [".origin-75-0", "transform-origin: 75% 0%;"],
              [".origin-75-75", "transform-origin: 75% 75%;"],
              [".origin-0-100", "transform-origin: 0% 100%;"],
              [".origin-100-0", "transform-origin: 100% 0%;"],
              [".origin-100-100", "transform-origin: 100% 100%;"],
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
