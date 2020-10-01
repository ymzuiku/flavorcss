import DocumentThinPage from "pages/components/DocumentThinPage";
import CodeEditor from "components/CodeEditor";
import doc from "components/Doc";
import DocumentUnitPage from "pages/components/DocumentUnitPage";

// const lista = Array(205 / 5)
//   .fill(0)
//   .map((_, i) => {
//     return [`scale-${i * 5}`, `--scale-x: ${i * 5}; --scale-y: ${i * 5};`];
//   });

const listb = Array(205 / 5)
  .fill(0)
  .map((_, i) => {
    return [`move-x-${i * 5}`, `--move-x: ${i * 5};`];
  });

const listc = Array(205 / 5)
  .fill(0)
  .map((_, i) => {
    return [`move-y-${i * 5}`, `--move-y: ${i * 5};`];
  });

const CodeTry = () => {
  return (
    <>
      <div className="h-xl"></div>
      <p className={doc.p}>鼠标 hover 查看效果</p>
      <CodeEditor>{`
  <div class="row center-center">
  <!-- 注意需要添加 transform 类，translate 才会生效 -->
  <div class="hover:move-x-lg transition-500 bg-red-400 w-3xl h-3xl m-lg"></div>
  </div>
      `}</CodeEditor>
    </>
  );
};

export default () => {
  return (
    <DocumentUnitPage
      title="Move"
      isScreen
      info={[
        "Move 是用过 css values 进行运作的，所以使用它之前需要确保使用了 transition css 类",
      ]}
      list={[
        ["move-x", "--move-x"],
        ["move-y", "--move-y"],
      ]}
      CodeTry={CodeTry}
    />
  );
};
