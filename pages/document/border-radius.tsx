import DocumentUnitPage from "pages/components/DocumentUnitPage";

export default () => {
  return (
    <DocumentUnitPage
      title="Border Radius"
      info={["radius-q/w/a/s 分别代表4个方向的圆角"]}
      list={[
        ["radius", "border-radius"],
        ["radius-q", "border-top-left-radius"],
        ["radius-w", "border-top-right-radius"],
        ["radius-a", "border-bottom-left-radius"],
        ["radius-s", "border-bottom-right-radius"],
      ]}
    />
  );
};
