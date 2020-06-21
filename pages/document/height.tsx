import DocumentUnitPage from "pages/components/DocumentUnitPage";

export default () => {
  return (
    <DocumentUnitPage
      isScreen
      title="Height"
      list={[
        ["h", "height"],
        ["max-h", "max-height"],
        ["min-h", "min-height"],
      ]}
    />
  );
};
