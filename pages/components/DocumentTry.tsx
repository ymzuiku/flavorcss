import doc from "components/Doc";
import CodeEditor from "components/CodeEditor";

export default () => {
  return (
    <>
      {/* <div className="h-xl"></div> */}
      <p className={doc.p}>您可以在下面的代码尝试 css 类</p>
      <CodeEditor className={doc.edit} codeClassName={doc.editCode}>{`
<div class="row center-center">
<div class="bg-gray-400 w-3xl h-3xl m-lg"></div>
<div class="bg-teal-400 w-3xl h-3xl m-lg"></div>
</div>
    `}</CodeEditor>
    </>
  );
};
