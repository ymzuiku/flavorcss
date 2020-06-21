import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="List Style Position"
      list={[
        [".list-inside", "list-style-position: inside;"],
        [".list-outside", "list-style-position: outside;"],
      ]}
    />
  );
};