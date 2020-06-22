import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Whitespace"
      list={[
        [".whitespace-normal", "white-space: normal;"],
        [".whitespace-nowrap", "white-space: nowrap;"],
        [".whitespace-pre", "white-space: pre;"],
        [".whitespace-pre-line", "white-space: pre-line;"],
        [".whitespace-pre-wrap", "white-space: pre-wrap;"],
      ]}
    />
  );
};
