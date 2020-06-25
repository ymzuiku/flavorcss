import DocumentThinPage from "pages/components/DocumentThinPage";
import CodeEditor from "components/CodeEditor";
import doc from "components/doc";

const CodeTry = () => {
  return (
    <>
      <div className="h-xl"></div>
      <p className={doc.p}>您可以在下面的代码尝试以上属性</p>
      <CodeEditor>{`
<div class="row center-center">
<div class="bg-red-400 w-3xl h-3xl m-lg spin-2000"></div>
</div>
    `}</CodeEditor>
    </>
  );
};

export default () => {
  return (
    <DocumentThinPage
      title="Animation Spin"
      info={[
        "无限旋转是常用的动画，一般用于loading等地方， flavorcss 默认添加了一个可制定速度的 spin 动画",
      ]}
      list={Array(11)
        .fill(0)
        .map((_, i) => {
          return [
            `.spin-${i * 500}`,
            `animation: flavorcss-spin ${i * 500}ms linear infinite`,
          ];
        })}
      CodeTry={CodeTry}
    />
  );
};
