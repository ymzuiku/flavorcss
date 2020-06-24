import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Stroke Width (SVG Element)"
      list={[
        [".stroke-0", "stroke-width: 0"],
        [".stroke-1", "stroke-width: 1"],
        [".stroke-2", "stroke-width: 2"],
        [".stroke-3", "stroke-width: 3"],
        [".stroke-4", "stroke-width: 4"],
      ]}
      code={`
<div class="row center-center p-2xl">
<svg class="stroke-current stroke-1 c-green-500 inline-block h-xl w-xl" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle> <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line> <line x1="9.69" y1="8" x2="21.17" y2="8"></line> <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line> <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line> <line x1="14.31" y1="16" x2="2.83" y2="16"></line> <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
</div>
      `}
    />
  );
};
