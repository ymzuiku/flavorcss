import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Screen readers"
      info={["进行渲染但是用户视觉上无法观测的样式"]}
      list={[
        [
          "sr-only",
          `position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;`,
        ],
        [
          "not-sr-only",
          `position: static;
          width: auto;
          height: auto;
          padding: 0;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;`,
        ],
      ].map((v) => {
        return [`.${v[0]}`, `${v[1]}`];
      })}
      code={`
<div class="row center-center">
  <div class="bg-gray-400 sr-only w-3xl h-3xl m-lg"></div>
  <div class="bg-teal-400 w-3xl h-3xl m-lg"></div>
</div>
      `}
    />
  );
};
