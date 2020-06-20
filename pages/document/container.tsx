import { DocH1, DocP, DocPage } from "components/Doc/comp";
import Layout from "./Layout";

export default () => {
  return (
    <Layout>
      <DocPage>
        <DocH1>container</DocH1>
        <DocP>page</DocP>
      </DocPage>
    </Layout>
  );
};
