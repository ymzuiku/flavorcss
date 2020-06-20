import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout nowUrl="/document/util">
      <DocPage>
        <DocH1>util</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
