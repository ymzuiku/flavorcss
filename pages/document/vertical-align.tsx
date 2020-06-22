import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Vertical Align"
      list={[
        [".align-baseline", "vertical-align: baseline;"],
        [".align-top", "vertical-align: top;"],
        [".align-middle", "vertical-align: middle;"],
        [".align-bottom", "vertical-align: bottom;"],
        [".align-text-top", "vertical-align: text-top;"],
        [".align-text-bottom", "vertical-align: text-bottom;"],
      ]}
    />
  );
};
