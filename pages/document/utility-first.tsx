import { DocH1, DocP, DocPage } from "components/Doc";
import Layout from "./Layout";

export default () => {
  return (
    <Layout nowUrl="/document/utility-first">
      <DocPage>
        <DocH1>utiltiy-first</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
