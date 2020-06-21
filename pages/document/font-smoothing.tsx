import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Font Smoothing"
      list={[
        [
          ".smoothing",
          "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
        ],
        [
          ".smoothing-auto",
          "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;",
        ],
      ]}
    />
  );
};
