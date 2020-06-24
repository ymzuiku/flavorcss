import doc from "components/doc";
import Layout from "./Layout";
import CodeEditor from "components/CodeEditor";

const error = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-3xl w-3xl mr-sm flex-0-0"
  >
    <circle cx="12" cy="12" r="10" fill="#fed7d7"></circle>
    <path
      fill="#f56565"
      d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"
    ></path>
  </svg>
);

export default () => {
  return (
    <Layout>
      <main className={doc.page}>
        <h1 className={doc.h1}>Atomic Class</h1>
        {error}
        <CodeEditor className={doc.edit} codeClassName={doc.editCode}>
          {`
<div class="bg-teal-100 p-2xl">
  <div class="max-w-screen-xs mx-auto row p-xl bg-white radius-lg shadow-xl">
    <div class="flex-0-0">
      <img class="h-3xl w-3xl" src="/img/logo.svg" alt="ChitChat Logo">
    </div>
    <div class="ml-md pt-px">
      <h4 class="fs-xl c-gray-900 line-xl">ChitChat</h4>
      <p class="fs-base c-gray-600 line-xl">You have a new message!</p>
    </div>
  </div>
</div>
    `}
        </CodeEditor>
      </main>
      <div className={doc.footerSpace}></div>
    </Layout>
  );
};
