import doc from "components/doc";
import Layout from "pages/document/Layout";
import DocumentTry from "pages/components/DocumentTry";
import Link from "next/link";
import DocumentUnitList from "pages/components/DocumentUnitList";

interface Props {
  title: string;
  isScreen?: boolean;
  info?: string[];
  CodeTry?: any;
  code?: string;
  list?: [string, string?][];
}

export default ({ title, isScreen, info, list, CodeTry, code }: Props) => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>{title}</h1>
        {info &&
          info.map((str) => {
            return (
              <p key={str} className={doc.p}>
                {str}
              </p>
            );
          })}
        <p className={doc.p}>
          {title} 遵循<b className="mx-sm">通用单位</b>
          {isScreen && (
            <span>
              和<b className="mx-sm">屏幕单位</b>
            </span>
          )}
          ，具体规则请查看{" "}
          <Link href="/document/util">
            <a>单位</a>
          </Link>
        </p>
        <p className={doc.p}>
          下面各表均是{" "}
          {list &&
            list.map((item, i) => (
              <span className={doc.code}>
                {item[0]}
                {i !== list.length - 1 && "、"}
              </span>
            ))}{" "}
          对<b className="mx-sm">通用单位</b>
          {isScreen && (
            <span>
              和<b className="mx-sm">屏幕单位</b>
            </span>
          )}
          的遍历
        </p>
        {CodeTry ? <CodeTry /> : <DocumentTry code={code} />}
        {list &&
          list.map((item) => {
            return (
              <DocumentUnitList
                key={item[0]}
                name={item[0]}
                value={item[1] || item[0]}
                isScreen={isScreen}
              />
            );
          })}
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
