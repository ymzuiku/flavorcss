import DocumentUnitPage from "pages/components/DocumentUnitPage";

export default () => {
  return (
    <DocumentUnitPage
      title="Padding"
      list={[
        ["p", "padding"],
        ["px", "padding-left & padding-right"],
        ["py", "padding-top & padding-bottom"],
        ["pt", "padding-top"],
        ["pr", "padding-right"],
        ["pb", "padding-bottom"],
        ["pl", "padding-left"],
      ]}
    />
  );
};
