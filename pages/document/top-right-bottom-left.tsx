import DocumentUnitPage from "pages/components/DocumentUnitPage";

export default () => {
  return (
    <DocumentUnitPage
      isScreen
      title="Top / Right / Bottom / Left"
      list={[["left"], ["right"], ["top"], ["bottom"]]}
    />
  );
};
