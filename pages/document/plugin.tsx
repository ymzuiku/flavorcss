import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout nowUrl="/document/plugin">
      <DocPage>
        <DocH1>plugin</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
