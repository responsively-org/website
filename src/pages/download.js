import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Contributors from "../components/Contributors";
import BrowserExtensions from "../components/BrowserExtensions";
import Download from "../components/Download";

const Index = ({ location }) => {
  return (
    <Layout location={location} title="Download the app">
      <SEO title="Download the App (free!)" location={location} />
      <>
        <Download />
        <BrowserExtensions />
        <Contributors />
      </>
    </Layout>
  );
};

export default Index;
