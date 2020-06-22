import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Transition Property"
      info={[
        "transition 的时间由 0ms - 2000ms, 每50ms为一阶梯，例如：",
        "transition-all-350 、transition-opacity-600.",
        "下表列出支持的属性：",
      ]}
      list={["all", "opacity", "background", "transform", "none"].map((v) => [
        `transition-${v}-?`,
        `transition:${v} ? var(--ease)`,
      ])}
    />
  );
};
