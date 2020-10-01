import doc from "components/Doc";
import Layout from "./Layout";
import Code from "components/Code";
import Link from "next/link";

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>其他 Atomic Class</h1>
        <h2>首先向 tailwindcss 致敬</h2>
        <p className={doc.p}>
          本库作者是 tailwindcss 的忠实拥护者，对他的敬佩无语言表。
        </p>
        <p className={doc.p}>
          本库的 90% 的 css 设计基本是完全遵循 tailwindcss。
        </p>
        <p className={doc.p}>
          本文档的大部分文案、设计也都是参考 tailwindcss。
        </p>
        <p className={doc.p}>
          可以说 Flavorcss 和 tailwindcss 较大的区别仅如下：
        </p>
        <ul>
          <li className="p-md c-teal-700">
            1. Flavorcss 是运行时编译，固定拥有海量原子类；
          </li>
          <li className="p-md c-teal-700">
            2. Flavorcss 通过 css values 进行动态配置
          </li>
        </ul>
        <p className={doc.h2}>Atomic Class 特性对比介绍</p>

        <h2 className={doc.h2}>基本模块对比</h2>
        <div className="max-w-vw overflow-auto">
          <table>
            <thead>
              <tr>
                <th className={doc.th}>项目名</th>
                <th className={doc.th}>体积(Not Gzip)</th>
                <th className={doc.th}>All CSS Values</th>
                <th className={doc.th}>All Css Pseudo</th>
                <th className={doc.th}>All Css Media</th>
                <th className={doc.th}>Dynamic allocation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["tachyons.io", "138kb", "true", "", "", ""],
                ["basscss.com", "3kb", "true", "", "", ""],
                ["turretcss.com", "94kb", "true", "", "", ""],
                [
                  "tailwindcss.com",
                  "200kb ~ 3000kb",
                  "Not all",
                  "true",
                  "true",
                  "",
                ],
                ["flavorcss", "20kb", "true", "true", "true", "true"],
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
        </div>
        <p className={doc.p}>
          tailwindcss 是一个发布前编译，所以它的功能相对于其他 Atomic Class
          数十倍丰富，但是每增加一项功能，就会带来相应的体积。即便我们使用
          Purgecss 去清理未使用的类别，但随着项目的庞大，我们会使用了非常多的
          Atomic Class，体积还是会逐步接近 Purgecss 之前的体积。
        </p>
        <p className={doc.p}>
          Flavorcss 的特点是运行时编译，所以可以不妥协css体积的前提下，提供和
          tailwindcss 一样丰富的 Atomic Class, Flavorcss 默认提供的数量相当于
          tailwindcss 需要加载 2500kb 的css的数量
        </p>
        <p className={doc.p}>
          运行时编译会带来多少的额外开销？请查看
          <Link href="/document/operating">
            <a>运行机制</a>
          </Link>
        </p>
        <p className={doc.p}>
          css
          属性非常多，例如满足响应式、优雅的命名，这都是基本要素而且是主观的。但是以下特性是不方便后期添加的，也是决定
          Atomic Class 库的质量的关键。
        </p>

        <h2 className={doc.h3}>All CSS Values</h2>
        <p className={doc.p}>
          是否所有非固定值的属性使用 CSS
          Values，这可以为运行时的定制化提供很好的支持。
        </p>

        <h2 className={doc.h3}>All Css Pseudo</h2>
        <p className={doc.p}>
          指所有属性都可以设置伪类，如：hover\active\focus\fist-child\last-child\odd-child
          以及这些伪类的 group 属性，这将会对所有属性增加 3 ~ 6 倍的体积
        </p>

        <h2 className={doc.h3}>All Css Media</h2>
        <p className={doc.p}>
          指所有属性都可以设置媒体查询，这将会对所有属性增加4倍的体积
        </p>
        <h2 className={doc.h3}>Dynamic allocation</h2>
        <p className={doc.p}>
          指一些配置的修改是否需要重新编译 css，不需要重新编译 css
          会对开发体验提供帮助
        </p>
        <h2 className={doc.h3}>Important</h2>
        <p className={doc.p}>指 Atomic Class 否可以相互覆盖。</p>
        <p className={doc.p}>
          Flavorcss 的样式加载顺序了非常好的设计，并且在此基础上 Flavorcss 对非
          Pseudo 组合有两层样式，可以进行覆盖。这并没有使用 !important 特性,
          为内联样式保留了最高权限，也为定制化 !important 预留了空间
        </p>
        <div className={doc.footerSpace}></div>
      </main>
    </Layout>
  );
};
