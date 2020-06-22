import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Background Attachment"
      list={[
        [".bg-fixed", "background-attachment: fixed;"],
        [".bg-local", "background-attachment: local;"],
        [".bg-scroll", "background-attachment: scroll;"],
      ]}
    />
  );
};
