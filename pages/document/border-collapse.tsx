import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Border Collapse"
      list={[
        "collapse",
        "separate",
      ].map((v) => [`.border-${v}`, `border-collapse: ${v}`])}
    />
  );
};
