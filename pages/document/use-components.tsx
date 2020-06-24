import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Use Select"
      list={[
        ["none", "none"],
        ["text", "text"],
        ["all", "all"],
        ["auto", "auto"],
      ].map((v) => {
        return [`.select-${v[0]}`, `	user-select:${v[1]}`];
      })}
    />
  );
};
