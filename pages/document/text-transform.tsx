import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Text Transform"
      list={[
        [".uppercase", "text-transform: uppercase;"],
        [".lowercase", "text-transform: lowercase;"],
        [".capitalize", "text-transform: capitalize;"],
        [".text-transform-none", "text-transform: none;"],
      ]}
    />
  );
};
