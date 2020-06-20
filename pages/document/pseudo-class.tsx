import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout nowUrl="/document/pseudo-class">
      <DocPage>
        <DocH1>pseudo-class</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
