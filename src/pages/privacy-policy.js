import React from "react";
import { CarbonAds } from "../components/CarbonAds";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Index = ({ location }) => {
  return (
    <Layout location={location} title="Privacy Policy">
      <SEO title="Privacy Policy" location={location} />
      <section className="text-center header-desktop-app" id="privacyPolicy">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-xl-9 col-lg-8 col-md-9">
              <h1 className="display-4">Privacy Policy</h1>
              <CarbonAds />

              <p>
                It is Responsively App's policy to respect your privacy
                regarding any information we may collect while operating our
                website. This Privacy Policy applies to{" "}
                <a href="https://responsively.app" style={{ color: "unset" }}>
                  https://responsively.app
                </a>
                , the desktop app and the browser extensions (hereinafter, "us",
                "we", or "https://responsively.app"). We respect your privacy
                and are committed to protecting personally identifiable
                information you may provide us through the Website. We have
                adopted this privacy policy ("Privacy Policy") to explain what
                information may be collected on our Website, how we use this
                information, and under what circumstances we may disclose the
                information to third parties. This Privacy Policy applies only
                to information we collect through the Website and does not apply
                to our collection of information from other sources.
              </p>
              <p>
                This Privacy Policy, together with the Terms and conditions
                posted on our Website, set forth the general rules and policies
                governing your use of our Website. Depending on your activities
                when visiting our Website, you may be required to agree to
                additional terms and conditions.
              </p>

              <h2>Website Visitors</h2>
              <p>
                Like most website operators, Responsively App collects
                non-personally-identifying information of the sort that web
                browsers and servers typically make available, such as the
                browser type, language preference, referring site, and the date
                and time of each visitor request. Responsively App's purpose in
                collecting non-personally identifying information is to better
                understand how Responsively App's visitors use its website. From
                time to time, Responsively App may release
                non-personally-identifying information in the aggregate, e.g.,
                by publishing a report on trends in the usage of its website.
              </p>
              <p>
                Responsively App also collects potentially
                personally-identifying information like Internet Protocol (IP)
                addresses for logged in users and for users leaving comments on
                https://responsively.app blog posts. Responsively App only
                discloses logged in user and commenter IP addresses under the
                same circumstances that it uses and discloses
                personally-identifying information as described below.
              </p>

              <h2>Gathering of Personally-Identifying Information</h2>
              <p>
                Certain visitors to Responsively App's websites choose to
                interact with Responsively App in ways that require Responsively
                App to gather personally-identifying information. The amount and
                type of information that Responsively App gathers depends on the
                nature of the interaction. For example, we ask visitors who sign
                up for a blog at https://responsively.app to provide a username
                and email address.
              </p>

              <h2>Security</h2>
              <p>
                The security of your Personal Information is important to us,
                but remember that no method of transmission over the Internet,
                or method of electronic storage is 100% secure. While we strive
                to use commercially acceptable means to protect your Personal
                Information, we cannot guarantee its absolute security.
              </p>

              <h2>Advertisements</h2>
              <p>
                Ads appearing on our website may be delivered to users by
                advertising partners, who may set cookies. These cookies allow
                the ad server to recognize your computer each time they send you
                an online advertisement to compile information about you or
                others who use your computer. This information allows ad
                networks to, among other things, deliver targeted advertisements
                that they believe will be of most interest to you. This Privacy
                Policy covers the use of cookies by Responsively App and does
                not cover the use of cookies by any advertisers.
              </p>

              <h2>Links To External Sites</h2>
              <p>
                Our Service may contain links to external sites that are not
                operated by us. If you click on a third party link, you will be
                directed to that third party's site. We strongly advise you to
                review the Privacy Policy and terms and conditions of every site
                you visit.
              </p>
              <p>
                We have no control over, and assume no responsibility for the
                content, privacy policies or practices of any third party sites,
                products or services.
              </p>

              <h2>Aggregated Statistics</h2>
              <p>
                Responsively App may collect statistics about the behavior of
                visitors to its website. Responsively App may display this
                information publicly or provide it to others. However,
                Responsively App does not disclose your personally-identifying
                information.
              </p>

              <h2>Cookies</h2>
              <p>
                To enrich and perfect your online experience, Responsively App
                uses "Cookies", similar technologies and services provided by
                others to display personalized content, appropriate advertising
                and store your preferences on your computer.
              </p>
              <p>
                A cookie is a string of information that a website stores on a
                visitor's computer, and that the visitor's browser provides to
                the website each time the visitor returns. Responsively App uses
                cookies to help Responsively App identify and track visitors,
                their usage of https://responsively.app, and their website
                access preferences. Responsively App visitors who do not wish to
                have cookies placed on their computers should set their browsers
                to refuse cookies before using Responsively App's websites, with
                the drawback that certain features of Responsively App's
                websites may not function properly without the aid of cookies.
              </p>
              <p>
                By continuing to navigate our website without changing your
                cookie settings, you hereby acknowledge and agree to
                Responsively App's use of cookies.
              </p>

              <h2>Privacy Policy Changes</h2>
              <p>
                Although most changes are likely to be minor, Responsively App
                may change its Privacy Policy from time to time, and in
                Responsively App's sole discretion. Responsively App encourages
                visitors to frequently check this page for any changes to its
                Privacy Policy. Your continued use of this site after any change
                in this Privacy Policy will constitute your acceptance of such
                change.
              </p>

              <p></p>

              <h2>Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us by raising an issue at
                https://github.com/responsively-org/responsively-app/issues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
