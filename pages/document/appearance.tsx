import DocumentThinPage from "pages/components/DocumentThinPage";
import CodeEditor from "components/CodeEditor";
import Doc from "components/Doc";

const CodeTry = () => {
  return (
    <>
      <div className="h-xl"></div>
      <p className={Doc.p}>您可以在下面的代码尝试以上属性</p>
      <CodeEditor className={Doc.edit} codeClassName={Doc.editCode}>{`
<div class="p-xl row center-center">
<select class="mr-xl">
  <option>Yes</option>
  <option>No</option>
  <option>Maybe</option>
</select>
<select class="appearance-none">
  <option>Yes</option>
  <option>No</option>
  <option>Maybe</option>
</select>
</div>
    `}</CodeEditor>
    </>
  );
};

export default () => {
  return (
    <DocumentThinPage
      title="Appearance"
      CodeTry={CodeTry}
      list={[[".appearance-none", "appearance: none;"]]}
    />
  );
};
