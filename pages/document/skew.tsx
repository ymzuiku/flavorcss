import DocumentThinPage from "pages/components/DocumentThinPage";
import CodeEditor from "components/CodeEditor";
import doc from "components/Doc";

// const lista = Array(205 / 5)
//   .fill(0)
//   .map((_, i) => {
//     return [`scale-${i * 5}`, `--scale-x: ${i * 5}; --scale-y: ${i * 5};`];
//   });

const listb = Array(21)
  .fill(0)
  .map((_, i) => {
    return [`skew-x-${i*5}`, `--skew-x: ${i*5};`];
  });

const listc = Array(21)
  .fill(0)
  .map((_, i) => {
    return [`skew-y-${i*5}`, `--skew-y: ${i*5};`];
  });

const CodeTry = () => {
  return (
    <>
      <div className="h-xl"></div>
      <p className={doc.p}>鼠标 hover 查看效果</p>
      <CodeEditor className={doc.edit} codeClassName={doc.editCode}>{`
  <div class="row center-center">
  <!-- 注意需要添加 transform 类，scale 才会生效 -->
  <div class="hover:skew-x-30 transition-500 bg-red-400 w-3xl h-3xl m-lg"></div>
  </div>
      `}</CodeEditor>
    </>
  );
};

export default () => {
  return (
    <DocumentThinPage
      title="Skew"
      info={[
        "Skew 是用过 css values 进行运作的，所以使用它之前需要确保使用了 transition css 类",
      ]}
      list={[...listb, ...listc] as any}
      CodeTry={CodeTry}
    />
  );
};
