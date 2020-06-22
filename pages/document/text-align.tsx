import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Text Aign"
      list={[
        [".text-left", "text-align: left;"],
        [".text-center", "text-align: center;"],
        [".text-right", "text-align: right;"],
        [".text-justify", "text-align: justify;"],
      ]}
    />
  );
};
