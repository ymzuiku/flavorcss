import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Resize"
      list={[
        ["none", "none"],
        ["both", "both"],
        ["x", "vertical"],
        ["y", "horizontal"],
      ].map((v) => {
        return [`.resize-${v[0]}`, `resize:${v[1]}`];
      })}
    />
  );
};
