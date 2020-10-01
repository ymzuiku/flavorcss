import doc from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>单位</h1>
        <div>
          所有单位都有负数值，如 left-xl指单位为 var(--xl); left--xl指单位为
          calc(0px - var(--xl))
        </div>
        <div>
          但是如width、radius
          等属性理论上不会出现负值，所以这些不会有负值的属性，Flavorcss
          就没有生成负值的 Atomic Class，而
          margin-left、padding-left、scale、move、rotate、left、top
          等等会有负值场景的，Flavorcss就生成了负值的 Atomic
          Class，为了方便文档的可阅读性，负值在整个文档的样式列表中并没有显示列出。
        </div>
        <div>Flavorcss 整体单位分为三类：通用单位、屏幕单位、特殊单位。</div>
        <h2 className={doc.h2}>通用单位：</h2>
        <p className={doc.p}>
          大部分都会拥有以下单位，如：width、height、move、padding、margin、border-width、border-radius、
        </p>
        <table className="def w-12/12">
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
              ["2xs", "指远远小于正常值的单位"],
              ["xs", "指小于正常值的单位"],
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
        <h2 className={doc.h2}>屏幕单位：</h2>
        <p className={doc.p}>
          布局相关，需要有较大范围的对象有屏幕单位：如：width、height、move、left、top、bottom、right
        </p>
        <table className="def w-12/12">
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
              ["screen-xs", "默认为 480px"],
              ["screen-sm", "默认为 640px"],
              ["screen-md", "默认为 720px"],
              ["screen-lg", "默认为 1024px"],
              ["screen-xl", "默认为 1280px"],
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
        <table className="def w-12/12">
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
        <h2 className={doc.h2}>特殊单位：</h2>
        <p className={doc.p}>
          有很多属性不太并不太适合使用以上单位，如 opacity、rotate、scale
          等等，他们一般来说是比率关系，还有 transition、delay
          是时间长短，他们都属于特殊单位，Flavorcss
          对这类单位的设定有着他们自身的规律，使用的时候可以查阅该属性的文档进行理解。
        </p>
        <div className={doc.footerSpace}></div>
      </main>
    </Layout>
  );
};
