import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout>
      <DocPage>
        <DocH1>spaces</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
