import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Pointer Events"
      list={["none", "auto"].map((v) => {
        return [`.events-${v}`, `pointer-events:${v}`];
      })}
    />
  );
};
