import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="List Style Type"
      list={[
        [".list-none", "list-style-type: none;"],
        [".list-disc", "list-style-type: disc;"],
        [".list-decimal", "list-style-type: decimal;"],
      ]}
    />
  );
};
