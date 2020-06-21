import doc from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>单位</h1>
        <h2 className={doc.h2}>大部分都会拥有以下单位：</h2>
        <p className={doc.p}>
          如：width、height、move、padding、margin、border-width、border-radius、
        </p>
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
                "2xl",
                "超出常规尺寸，一般用于定制化的大小，如特大字体、按钮宽度",
              ],
              [
                "3xl",
                "超出常规尺寸，一般用于定制化的大小，如特大字体、按钮宽度",
              ],
              [
                "4xl",
                "超出常规尺寸，一般用于定制化的大小，如特大字体、按钮宽度",
              ],
              [
                "5xl",
                "超出常规尺寸，一般用于定制化的大小，如特大字体、按钮宽度",
              ],
              ["6xl", "最大尺寸特定尺寸"],
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
        <h2 className={doc.h2}>布局相关单位拥有以下单位：</h2>
        <p className={doc.p}>
          如：width、height、move、left、top、bottom、right
        </p>
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
              ["vh", "100vh"],
              ["vm", "100vm"],
              ["@sm", "添加前缀@区分于普通的 sm, 默认为 640px"],
              ["@md", "添加前缀@区分于普通的 md, 默认为 720px"],
              ["@lg", "添加前缀@区分于普通的 lg, 默认为 1024px"],
              ["@xl", "添加前缀@区分于普通的 xl, 默认为 1280px"],
              ["0/12", "0%"],
              ["1/12", "8.333333%"],
              ["2/12", "16.666667%"],
              ["3/12", "25%"],
              ["4/12", "33.333333%"],
              ["5/12", "41.666667%"],
              ["6/12", "50%"],
              ["7/12", "58.333333%"],
              ["8/12", "66.666667%"],
              ["9/12", "75%"],
              ["10/12", "83.333333%"],
              ["11/12", "91.666667%"],
              ["12/12", "100%"],
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
              ["--fs-sm, --fs-md ...", "指 font-size 的单位"],
              [
                "--pt-sm, --pt-md ...",
                "指宽度较大的属性的单位，如 width、margin、padding",
              ],
              [
                "--li-sm, --li-md ...",
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

