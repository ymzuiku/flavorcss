import DocumentThinPage from "pages/components/DocumentThinPage";

export default () => {
  return (
    <DocumentThinPage
      title="Transition Timing function"
      list={[
        [".ease", "--ease: var(--ease)"],
        [".ease-linear", "--ease: var(--ease-linear)"],
        [".ease-in", "--ease: var(--ease-in)"],
        [".ease-out", "--ease: var(--ease-out)"],
        [".ease-in-out", "--ease: var(--ease-in-out)"],
      ]}
    />
  );
};
