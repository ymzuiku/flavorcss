import DocumentUnitPage from "pages/components/DocumentUnitPage";

export default () => {
  return (
    <DocumentUnitPage
      title="Gap"
      list={[
        ["gap", "gap"],
        ["col-gap", "column-gap"],
        ["row-gap", "row-gap"],
      ]}
    />
  );
};
