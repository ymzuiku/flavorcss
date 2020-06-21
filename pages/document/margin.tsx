import DocumentUnitPage from "pages/components/DocumentUnitPage";

export default () => {
  return (
    <DocumentUnitPage
      title="Margin"
      list={[
        ["m", "margin"],
        ["mx", "margin-left & margin-right"],
        ["my", "margin-top & margin-bottom"],
        ["mt", "margin-top"],
        ["mr", "margin-right"],
        ["mb", "margin-bottom"],
        ["ml", "margin-left"],
      ]}
    />
  );
};
