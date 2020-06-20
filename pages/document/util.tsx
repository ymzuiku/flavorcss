import doc from "components/Doc";
import Layout from "./Layout";
import Code from "components/Code";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>单位</h1>
        <h2 className={doc.h2}>大部分都会拥有以下单位：</h2>
        <table className="w-12/12">
          <thead>
            <tr>
              <th className={doc.th}>关键字</th>
              <th className={doc.th}>含义</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0", "0px"],
              ["none", "none"],
              ["auto", "auto"],
              ["px", "1px"],
              ["xs", "指远小于正常值的单位"],
              ["sm", "指较小的单位"],
              ["md", "指常规单位"],
              ["lg", "指偏大单位"],
              ["xl", "指大单位"],
              [
                "2xl ~ 6xl",
                "超出常规尺寸，一般用于定制化的大小，如特大字体、按钮宽度",
              ],
              ["0/12 ~ 12/12", "0%~100% 一般用于布局中"],
              ["small", "只有width、height、move拥有该尺寸，默认为 640px"],
              ["middle", "只有width、height、move拥有该尺寸，默认为 720px"],
              ["large", "只有width、height、move拥有该尺寸，默认为 1024px"],
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
        <h2 className={doc.h2}>只有 width、height、move 尺寸拥有以下单位：</h2>
        <table className="w-12/12">
          <thead>
            <tr>
              <th className={doc.th}>关键字</th>
              <th className={doc.th}>含义</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["vh", "100vh"],
              ["vm", "100vm"],
              ["small", "默认为 640px"],
              ["middle", "默认为 720px"],
              ["large", "默认为 1024px"],
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
        <h2 className={doc.h2}>css values 含义</h2>
        <table className="w-12/12">
          <thead>
            <tr>
              <th className={doc.th}>关键字</th>
              <th className={doc.th}>含义</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["--fs-?", "指 font-size 的单位"],
              ["--pt-?", "指宽度较大的属性的单位，如 width、margin、padding"],
              [
                "--li-?",
                "指宽度较小的属性的单位，如 border-weight、border-radius",
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
        <div className={doc.footerSpace}></div>
      </main>
    </Layout>
  );
};
