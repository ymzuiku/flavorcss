import doc from "components/Doc";
import Layout from "./Layout";
import useSSRLayoutEffect from "components/useSSRLayoutEffect";
import Link from "next/link";
import CodeEditor from "components/CodeEditor";

function Item({ item, i }: any) {
  return (
    <div key={i}>
      <h2 className={[doc.h2, "uppercase"].join(" ")}>{item[0]}</h2>
      <div className="row flex-wrap">
        {(item[1] as any).map((v: any, i: number) => {
          return (
            <div key={i} className="p-xl col center-center">
              <div
                className={[
                  "w-3xl h-3xl radius-lg transform hover:scale-120 transition-400  shadow-xl shadow-opacity-5",
                  v[1] === "255,255,255" && "b-px b-primary-200",
                ].join(" ")}
                style={{ background: `rgb(${v[1]})` }}
              ></div>
              <div className="fs-xs max-w-2xl mt-sm c-primary-500">
                {v[0].replace(/--/g, "")}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default () => {
  useSSRLayoutEffect(() => {
    console.log(document.body.style);
  });
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>颜色</h1>
        <p className={doc.p}>
          flavorcss
          对颜色的设定是毫不妥协的，总共预设了92种颜色，每种颜色都可以再次独自设定透明度，透明度的阶层每个颜色共有20层。
        </p>
        <p className={doc.p}>
          Flavorcss 对常用设定颜色的属性都做了预设，如下表：
        </p>
        <table className="def w-12/12">
          <thead>
            <tr>
              <th className={doc.th}>可以设定颜色的属性</th>
              <th className={doc.th}>设定颜色示例</th>
              <th className={doc.th}>设定透明度示例</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["background-color", ".bg-red-500", ".bg-opacity-50"],
              ["border-color", ".bg-red-500", ".bg-opacity-50"],
              ["color", ".c-red-500", ".c-opacity-50"],
              ["box-shadow-color", ".shadow-red-500", ".shadow-opacity-50"],
              ["outline", ".outline-red-500", ".outline-opacity-50"],
              [
                "placeholder",
                ".placeholder-red-500",
                ".placeholder-opacity-50",
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
        <h1 className={doc.h1}>颜色使用示例</h1>
        <CodeEditor>
          {`
<div class="p-2xl row">
  <!-- 背景色 -->
  <div class="bg-red-200 m-md w-2xl h-2xl radius-lg "></div>
  <!-- 背景色透明度 -->
  <div class="bg-red-300 bg-opacity-10 m-md w-2xl h-2xl radius-lg "></div>
  <!-- border 颜色 -->
  <div class="b-red-400 m-md w-2xl h-2xl radius-lg bg-white b-xs "></div>
  <!-- shadow 颜色 -->
  <div class="shadow-red-600 shadow-opacity-50 shadow-md m-md w-2xl h-2xl radius-lg bg-red-500"></div>
  <!-- outline 颜色 -->
  <div class="outline-md outline-yellow-500 m-md w-2xl h-2xl"></div>
  <!-- 文字颜色 -->
  <div class="c-red-700 m-md w-2xl h-2xl radius-lg ">Hello Text Color</div>
  <!-- placeholder 颜色 -->
  <input class="m-md w-4xl h-2xl bg-teal-100 radius-sm p-sm placeholder-blue-500" placeholder="Please input..."></input>
</div>
`}
        </CodeEditor>
        <p className={doc.p}>
          我们可以很轻松的通过 css values 覆盖来自定义颜色，具体可以参考：
          <Link href="/document/config">
            <a>自定义配置</a>
          </Link>
        </p>
        <p className={[doc.p, "uppercase"].join(" ")}>
          我们还预留了 primary，使用 primary
          代替指定颜色，可以更加语义化的定制主题色， 默认的 primary 是 blue。
        </p>
        <p className={doc.p}>current 表示 currentColor</p>
        <h1 className={doc.h1}>所有预定颜色</h1>
        {list.map((item, i) => {
          return <Item item={item} i={i} />;
        })}
        <div className={doc.footerSpace}></div>
      </main>
    </Layout>
  );
};

const _base = `
--current: 255,255,255;
--white: 255,255,255;
--black: 0,0,0;
`;
const _gray = `
--gray-100: 247,250,252;
--gray-200: 237,242,246;
--gray-300: 226,232,240;
--gray-400: 204,213,224;
--gray-500: 160,174,192;
--gray-600: 113,128,150;
--gray-700: 73,85,104;
--gray-800: 44,55,72;
--gray-900: 26,32,44;
`;

const _red = `
--red-100: 254,245,245;
--red-200: 255,215,215;
--red-300: 254,178,178;
--red-400: 246,173,84;
--red-500: 236,137,54;
--red-600: 221,106,31;
--red-700: 192,85,33;
--red-800: 155,66,33;
--red-900: 123,52,30;
`;

const _orange = `
--orange-100: 255,250,240;
--orange-200: 255,235,200;
--orange-300: 251,211,141;
--orange-400: 246,173,84;
--orange-500: 236,137,54;
--orange-600: 221,106,31;
--orange-700: 192,85,33;
--orange-800: 155,66,33;
--orange-900: 123,52,30;
`;

const _yellow = `
--yellow-100: 255,255,240;
--yellow-200: 255,252,191;
--yellow-300: 250,240,136;
--yellow-400: 245,224,94;
--yellow-500: 235,200,75;
--yellow-600: 215,158,46;
--yellow-700: 182,121,31;
--yellow-800: 151,90,23;
--yellow-900: 116,65,16;
`;

const _green = `
--green-100: 240,255,244;
--green-200: 198,246,213;
--green-300: 155,230,180;
--green-400: 104,211,145;
--green-500: 72,187,129;
--green-600: 56,161,105;
--green-700: 47,132,90;
--green-800: 39,104,73;
--green-900: 33,84,61;
`;
const _teal = `
--teal-100: 230,255,250;
--teal-200: 177,245,234;
--teal-300: 129,231,217;
--teal-400: 78,209,197;
--teal-500: 55,179,172;
--teal-600: 49,151,149;
--teal-700: 46,122,123;
--teal-800: 39,94,97;
--teal-900: 35,78,82;
`;
const _blue = `
--blue-100: 235,248,255;
--blue-200: 190,227,248;
--blue-300: 144,205,244;
--blue-400: 98,179,237;
--blue-500: 66,153,225;
--blue-600: 49,130,206;
--blue-700: 43,109,176;
--blue-800: 44,82,130;
--blue-900: 43,67,101;
`;
const _indigo = `
--indigo-100: 236,244,255;
--indigo-200: 195,218,254;
--indigo-300: 162,191,250;
--indigo-400: 127,156,244;
--indigo-500: 102,126,234;
--indigo-600: 89,104,216;
--indigo-700: 76,82,191;
--indigo-800: 67,64,144;
--indigo-900: 60,54,107;
`;
const _purple = `
--purple-100: 250,245,255;
--purple-200: 233,217,253;
--purple-300: 215,188,250;
--purple-400: 182,147,244;
--purple-500: 159,121,234;
--purple-600: 128,90,213;
--purple-700: 108,71,193;
--purple-800: 85,60,154;
--purple-900: 67,51,122;
`;
const _pink = `
--pink-100: 255,245,247;
--pink-200: 255,214,226;
--pink-300: 251,182,206;
--pink-400: 245,136,179;
--pink-500: 237,99,166;
--pink-600: 214,63,140;
--pink-700: 184,50,128;
--pink-800: 151,39,109;
--pink-900: 112,35,89;
`;

const _light = `
--light-100: 255,255,255;
--light-200: 250,250,250;
--light-300: 245,245,245;
--light-400: 240,240,240;
--light-500: 233,233,233;
--light-600: 227,227,227;
--light-700: 220,220,220;
--light-800: 215,215,215;
--light-900: 209,209,209;
`;

const _dark = `
--pink-100: 255,245,247;
--dark-100: 0,0,0;
--dark-200: 31,31,31;
--dark-300: 48,48,48;
--dark-400: 60,60,60;
--dark-500: 75,75,75;
--dark-600: 92,92,92;
--dark-700: 108,108,108;
--dark-800: 122,122,122;
--dark-900: 133,133,133;
`;

function getList(str: string) {
  return str
    .split("\n")
    .map((s) => {
      let [name, value] = s.split(":");
      if (value) {
        value = value.replace(";", "").trim();
        return [name, value];
      }

      return null;
    })
    .filter(Boolean);
}

const list = [
  ["base", getList(_base)],
  ["gray", getList(_gray)],
  ["red", getList(_red)],
  ["orange", getList(_orange)],
  ["yellow", getList(_yellow)],
  ["green", getList(_green)],
  ["teal", getList(_teal)],
  ["blue / primary", getList(_blue)],
  ["indigo", getList(_indigo)],
  ["purple", getList(_purple)],
  ["pink", getList(_pink)],
  ["light", getList(_light)],
  ["dark", getList(_dark)],
];
