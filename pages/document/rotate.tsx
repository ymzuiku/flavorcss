import DocumentThinPage from "pages/components/DocumentThinPage";
import CodeEditor from "components/CodeEditor";
import doc from "components/Doc";

const lista = Array(37)
  .fill(0)
  .map((_, i) => {
    return [`.rotate-${i * 10}`, `--rotate: ${i * 10}`];
  });

const CodeTry = () => {
  return (
    <>
      <div className="h-xl"></div>
      <p className={doc.p}>鼠标 hover 查看效果</p>
      <CodeEditor>{`
  <div class="row center-center">
  <!-- 注意需要添加 transform 类，scale 才会生效 -->
  <div class="transform hover:rotate-150 transition-500 bg-red-400 w-3xl h-3xl m-lg"></div>
  </div>
      `}</CodeEditor>
    </>
  );
};

export default () => {
  return (
    <DocumentThinPage
      title="Rotate"
      info={[
        "Rotate 是用过 css values 进行运作的，所以使用它之前需要确保使用了 transform css 类",
      ]}
      list={lista as any}
      CodeTry={CodeTry}
    />
  );
};
