import DocumentThinPage from "pages/components/DocumentThinPage";

function mkList(n: string, v: string) {
  return Array(11)
    .fill(0)
    .map((_, i) => {
      return [
        `.anime${n}${i * 100}`,
        `.transtion: ${v} ${i * 100}ms var(--ease)`,
      ];
    });
}

export default () => {
  return (
    <DocumentThinPage
      title="Transition Property"
      info={[
        "transition 的时间由 0ms - 1000ms, 每 100ms 为一阶梯，例如：",
        "transition-all-300 、transition-opacity-600.",
        "下表列出支持的属性：",
      ]}
      list={
        [
          ...mkList("-", "all"),
          // ...mkList("-opacity-", "opacity"),
          // ...mkList("-transform-", "transform"),
        ] as any
      }
    />
  );
};
