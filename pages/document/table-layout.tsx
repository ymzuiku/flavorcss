import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Table Layout"
      list={[
        "auto",
        "fixed",
      ].map((v) => [`table-${v}`, `table-layout: ${v}`])}
    />
  );
};
