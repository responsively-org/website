import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location} title="Page Not Found">
      <SEO title="Page Not Found" />
      <section className="min-vh-100 bg-primary-3 text-light py-5 o-hidden">
        <div className="container">
          <div className="row justify-content-center mb-md-6">
            <div className="col-auto">
              <Link to="/">
                <img src="/assets/img/logo.svg" alt="Leap" />
              </Link>
            </div>
          </div>
          <div className="row text-center py-6">
            <div className="col layer-2">
              <h1 className="display-1 mb-0">404</h1>
              <h2 className="h1">Page not found!</h2>
              <div className="lead mb-4">
                It appears the page you were looking for couldn’t be found.
              </div>
              <Link className="btn btn-primary btn-lg" to="/">
                Go back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
