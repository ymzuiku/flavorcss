import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Opacity"
      list={Array(21)
        .fill(0)
        .map((_, i) => [`opacity-${i * 5}`, `opacity:${i * 5}`])}
    />
  );
};
