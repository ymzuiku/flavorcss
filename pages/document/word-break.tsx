import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Work break"
      list={[
        [".break-normal", "word-break: normal; overflow-wrap: normal"],
        [".break-words", "overflow-wrap: break-word;"],
        [".break-all", "word-break: break-all;"],
        [".wrap-hidden", "overflow: hidden; text-overflow:ellipsis; white-space: nowrap"],
        [".wrap", "overflow:hidden;overflow-wra:break-word; word-break:break-all;"],
      ]}
    />
  );
};
