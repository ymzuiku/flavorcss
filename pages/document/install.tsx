import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout nowUrl="/document/install">
      <DocPage>
        <DocH1>install</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
