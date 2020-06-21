import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Font Style"
      list={[
        [".italic", "font-style: italic;"],
        [".not-italic", "font-style: normal;"],
      ]}
    />
  );
};
