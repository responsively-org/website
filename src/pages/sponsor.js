import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Sponsor } from "../components/Sponsor";

const Index = ({ location }) => {
  return (
    <Layout location={location} title="Become a Sponsor">
      <SEO
        title="Become a Sponsor for the Responsively App project"
        location={location}
      />
      <>
        <Sponsor />
      </>
    </Layout>
  );
};

export default Index;
