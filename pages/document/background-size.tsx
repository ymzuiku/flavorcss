import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Background Repeat"
      list={["auto", "cover", "contain"].map((v) => [
        `.bg-${v}`,
        `background-size:${v}`,
      ])}
    />
  );
};
