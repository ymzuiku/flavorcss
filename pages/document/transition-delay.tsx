import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Transition Delay"
      list={Array(11)
        .fill(0)
        .map((_, i) => {
          return [`.delay-${i * 500}`, `transition-delay: ${i * 500}ms`];
        })}
    />
  );
};
