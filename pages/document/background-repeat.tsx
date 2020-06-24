import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Background Repeat"
      list={[
        "repeat",
        "no-repeat",
        "repeat-x",
        "repeat-y",
        "round",
        "space",
      ].map((v) => [`.bg-${v}`, `background-repeat:${v}`])}
    />
  );
};
