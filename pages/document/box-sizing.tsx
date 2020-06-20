import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout nowUrl="/document/box-sizing">
      <DocPage>
        <DocH1>box-sizing</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
