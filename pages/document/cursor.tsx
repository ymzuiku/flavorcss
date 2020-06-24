import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Cursor"
      list={["auto", "default", "pointer", "wait", "text", "move", "not-allowed"].map((v) => [
        `.cursor-${v}`,
        `cursor:${v}`,
      ])}
    />
  );
};
