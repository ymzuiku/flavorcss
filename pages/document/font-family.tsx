import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Font Family"
      info={['默认字体为 sans']}
      list={[
        [
          ".sans",
          'font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
        ],
        [
          ".serif",
          'font-family: Georgia, Cambria, "Times New Roman", Times, serif;',
        ],
        [
          ".mono",
          'font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
        ],
      ]}
    />
  );
};
