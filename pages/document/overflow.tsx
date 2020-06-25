import doc from "components/doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Overflow</h1>
        <p className={doc.h3}>在下面的代码使用 overflow 相关的类</p>
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
              [".overflow-auto", "overflow: auto;"],
              [".overflow-hidden", "overflow: hidden;"],
              [".overflow-visible", "overflow: visible;"],
              [".overflow-scroll", "overflow: scroll;"],
              [".overflow-x-auto", "overflow-x: auto;"],
              [".overflow-y-auto", "overflow-y: auto;"],
              [".overflow-x-hidden", "overflow-x: hidden;"],
              [".overflow-y-hidden", "overflow-y: hidden;"],
              [".overflow-x-visible", "overflow-x: visible;"],
              [".overflow-y-visible", "overflow-y: visible;"],
              [".overflow-x-scroll", "overflow-x: scroll;"],
              [".overflow-y-scroll", "overflow-y: scroll;"],
              [".scrolling-touch", "-webkit-overflow-scrolling: touch;"],
              [".scrolling-auto", "-webkit-overflow-scrolling: auto;"],
              [".mini-scrollbar", ".mini-scrollbar::-webkit-scrollbar {...}"],
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
