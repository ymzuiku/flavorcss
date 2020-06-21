import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Font Weight"
      list={[
        [".fw-100", "font-weight: 100;"],
        [".fw-200", "font-weight: 200;"],
        [".fw-300", "font-weight: 300;"],
        [".fw-400", "font-weight: 400;"],
        [".fw-500", "font-weight: 500;"],
        [".fw-600", "font-weight: 600;"],
        [".fw-700", "font-weight: 700;"],
        [".fw-800", "font-weight: 800;"],
        [".fw-900", "font-weight: 900;"],
      ]}
    />
  );
};
