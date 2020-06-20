import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout nowUrl="/document/theme">
      <DocPage>
        <DocH1>theme</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
