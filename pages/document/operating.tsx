import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout nowUrl="/document/operating">
      <DocPage>
        <DocH1>operating</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
