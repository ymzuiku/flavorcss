import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Outline Style"
      list={["solid", "dotted", "dashed", "double", "none"].map((v) => [
        `.outline-${v}`,
        `outline-style:${v}`,
      ])}
    />
  );
};
