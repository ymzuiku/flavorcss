import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Border Style"
      list={["solid", "dotted", "dashed", "double", "none"].map((v) => [
        `b-${v}`,
        `border-style:${v}`,
      ])}
    />
  );
};
