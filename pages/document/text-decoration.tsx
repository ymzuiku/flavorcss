import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Text Decoration"
      list={[
        [".underline", "text-decoration: underline;"],
        [".line-through", "text-decoration: line-through;"],
        [".text-decoration-none", "text-decoration: none;"],
      ]}
    />
  );
};
