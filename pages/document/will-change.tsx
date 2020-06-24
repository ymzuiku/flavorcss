import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Will Change"
      list={[
        ["auto", "auto"],
        ["scroll", "scroll-position"],
        ["contents", "contents"],
        ["transform", "transform"],
        ["left-top", "left, top"],
      ].map((v) => {
        return [`will-change-${v[0]}`, `will-change:${v[1]};`];
      })}
    />
  );
};
