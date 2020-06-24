import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Letter Spacing"
      info={["letter 从 -5 至 10， 一共15个阶梯"]}
      list={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
        return [`.letter-${i}`, `letter-spacing:${(i * 0.025).toFixed(3)}em`];
      })}
    />
  );
};
