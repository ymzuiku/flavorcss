import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Box Shadow"
      list={[
        [
          ".shadow-xs",
          "box-shadow: 0 0 0 1px var(--shadow-color), 0 0 0 0 var(--shadow-color)",
        ],
        [
          ".shadow-sm",
          "box-shadow: 0 1px 2px 0 var(--shadow-color), 0 0 0 0 var(--shadow-color)",
        ],
        [
          ".shadow",
          "box-shadow: 0 1px 3px 0 var(--shadow-color), 0 1px 2px 0 var(--shadow-color)",
        ],
        [
          ".shadow-md",
          "box-shadow: 0 4px 6px -1px var(--shadow-color), 0 2px 4px -1px var(--shadow-color)",
        ],
        [
          ".shadow-lg",
          "box-shadow: 0 10px 15px -3px var(--shadow-color), 0 4px 6px -2px var(--shadow-color)",
        ],
        [
          ".shadow-xl",
          "box-shadow: 0 20px 25px -5px var(--shadow-color), 0 10px 10px -5px var(--shadow-color)",
        ],
        [
          ".shadow-2xl",
          "box-shadow: 0 25px 50px -12px var(--shadow-color), 0 0 0 0 var(--shadow-color)",
        ],
        [
          ".shadow-inner",
          "box-shadow: inset 0 2px 4px 0 var(--shadow-color), 0 0 0 0 var(--shadow-color)",
        ],
        [
          ".shadow-outline",
          "box-shadow: 0 0 0 3px var(--shadow-color), 0 0 0 0 var(--shadow-color)",
        ],
      ]}
    />
  );
};
