import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout nowUrl="/document/block-point">
      <DocPage>
        <DocH1>block-point</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
