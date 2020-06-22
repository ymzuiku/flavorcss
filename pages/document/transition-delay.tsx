import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Transition Delay"
      list={Array(41)
        .fill(0)
        .map((_, i) => {
          return [`delay-${i * 50}`, `transition-delay: ${i * 50}ms`];
        })}
    />
  );
};
