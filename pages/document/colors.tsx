import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout nowUrl="/document/colors">
      <DocPage>
        <DocH1>colors</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
