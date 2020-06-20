import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout nowUrl="/document/container">
      <DocPage>
        <DocH1>container</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
