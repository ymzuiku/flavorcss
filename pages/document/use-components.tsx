import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout nowUrl="/document/use-components">
      <DocPage>
        <DocH1>use-components</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
