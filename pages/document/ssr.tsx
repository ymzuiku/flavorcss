import doc from "components/doc";
import Layout from "./Layout";
import Code from "components/Code";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>SSR 支持</h1>
        <p className={doc.p}>
          flavorcss 支持 SSR，我们只需要在 head 中添加 flavorcss 脚本即可。
        </p>
        <p className={doc.p}>
          本网站是使用 Next.js 配合 falvorcss 进行编写，Next.js 等其他 SSR
          会托管 index.html 的生成，所以需要使用一点点小技巧；下面是 Next.js
          中使用的示例.
        </p>
        <p className={doc.p}>编写 _app.js:</p>
        <Code wrap theme="dracula" language="jsx" className={doc.editCode}>
          {`
import { useEffect } from "react";
import Head from 'next/head';

const key = "__useScript"

// 减少每个 pages 重复进行脚本加载，做一定的缓存判断
const useScript = (src: string) => {
  useEffect(() => {
    if (window[key]) {
      window[key] = {};
    }
    window[key][src] = true;
  }, []);

  if (
    typeof window !== "undefined" &&
    window[key] &&
    window[key][src]
  ) {
    return null;
  }

  return <script src={src}></script>;
};

export default function MyApp({ Component, pageProps }: any) {
  // 建议将 node_modules/flavorcss/umd/index.js 拷贝至 static 下
  const flavorcss = useScript("/static/flavorcss.js");

  // 不要使用 next/head 组件，next/head 组件会导致 head 渲染被 vdom 接管，从而清除 flavorcss 写入 head 中的 style
  return (
    <>
      <title>My page title</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui, viewport-fit=cover"
      />
      {flavorcss}
      <div className="full">
        <Component {...pageProps} />
      </div>
    </head>
  );
}

          
          `}
        </Code>
        <div className={doc.footerSpace}></div>
      </main>
    </Layout>
  );
};