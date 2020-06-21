import DocumentUnitPage from "pages/components/DocumentUnitPage";

export default () => {
  return (
    <DocumentUnitPage
      isScreen
      title="Width"
      list={[
        ["w", "width"],
        ["max-w", "max-width"],
        ["min-w", "min-width"],
      ]}
    />
  );
};
