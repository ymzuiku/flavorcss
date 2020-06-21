import doc from "components/Doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Overflow</h1>
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
        <p className={doc.h3}>在下面的代码使用 overflow 相关的类</p>
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>{`
<div class="overflow-auto block p-xl border-box h-4xl mx-auto bg-white">
  <img class="object-cover object-0-0 bg-gray-400 m-md w-5xl h-5xl mx-auto" src="/static/imgs/building.jpeg">
  <img class="object-contain object-50-50 bg-gray-400 m-md w-5xl h-5xl mx-auto" src="/static/imgs/building.jpeg">
</div>
          `}</CodeEditor>
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
