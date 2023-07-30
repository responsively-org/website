import { Icon } from "@iconify/react";
import { useRef } from "react";
import Contributors from "../Contributors";

export const Sponsor = () => {
  const ref = useRef(null);
  return (
    <>
      <section
        id="auto"
        className="bg-primary-3 text-light text-left has-divider"
      >
        <div className="container">
          <h1 className="mb-3" id="become-a-sponsor">
            Become a Sponsor
          </h1>
          <p className="text-justify">
            Being a free and open-source project that is supported by the
            community, your sponsorship is critical to our mission to keep the
            app free and accessible to everyone. Sponsoring is a great way to
            show your support for the open-source community and to help us
            maintain and improve our app.
          </p>
          <p className="text-justify">
            Sponsorships can be done through the following ways:
            <div
              class="d-flex justify-content-center my-4"
              style={{ gap: "10px" }}
            >
              <a
                className="btn btn-md btn-white"
                href="https://github.com/sponsors/responsively-org"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Sponsors
              </a>
              <a
                className="btn btn-md btn-white"
                href="https://opencollective.com/responsively"
                target="_blank"
                rel="noreferrer"
              >
                Open Collective
              </a>
            </div>
          </p>
          <p className="text-justify">
            Both recurring and one-time sponsorships are accepted. Recurring
            sponsorships are preferred as they help us cover our ongoing costs
            and plan for the future. If you have any questions about sponsoring
            Responsively App, please contact us at{" "}
            <a href="mailto:p.manoj.vivek@gmail.com">p.manoj.vivek@gmail.com</a>
          </p>
          <div className="border-bottom border-muted my-4" />
          <h4>Company Sponsors</h4>
          <p className="text-justify">
            Sponsoring Responsively App is a great way to enhance the reputation
            of your brand and showcase your commitment to open-source software
            development. Your support will help us deliver our mission and
            achieve our goals, which in turn will enhance your brand reputation
            and create positive associations with your company.
          </p>
          <p className="text-justify">
            By sponsoring Responsively App, you will put yourselves in front of
            a community of top talent in the open-source software development
            space. You can leverage this community to gain new talent,
            collaborate with other sponsors, and build long-term relationships
            with developers who share your values.
          </p>
          <p className="text-justify">
            If you're building a product or service that is relevant to the web
            development community, sponsoring Responsively App is a great way to
            increase your visibility through the badges on our website. Your
            sponsorship will help you reach a wider audience and generate more
            leads for your company.
          </p>
          <div className="border-bottom border-muted my-4" />
          <h4>Individual Sponsors</h4>
          <p className="text-justify">
            We're grateful for the support of the developers community in a lot
            of ways and We understand that individual contributions come in
            different sizes and forms, so whether you are able to offer a small
            or large amount, every bit of support counts. We appreciate your
            consideration of this request, and we thank you for being a valued
            member of our community.
          </p>
          <p className="text-justify">
            We know it's a big ask, but if you work for a company that uses and
            benefits from Responsively App, please consider asking your employer
            to sponsor Responsively App. We understand that companies have
            budgets and financial constraints, but we would greatly appreciate
            your efforts in spreading the word about our project and the
            benefits it provides.
          </p>
          <p className="text-justify">
            Besides sponsoring, you can also contribute to the project by
            submitting bug reports, feature requests, and pull requests. You can
            also help us spread the word about Responsively App by sharing it
            with your friends and colleagues.
          </p>
          <div className="border-bottom border-muted my-4" />
          <h4>Partnership</h4>
          <p className="text-justify">
            If you're interested in exploring partnership opportunities with us,
            please don't hesitate to reach out to us at{" "}
            <a href="mailto:p.manoj.vivek@gmail.com">p.manoj.vivek@gmail.com</a>
            . We'd love to hear from you and discuss how we can work together to
            achieve mutual success.
          </p>
          <p className="text-justify">
            Thank you again for considering sponsoring Responsively App. Your
            support will help us continue to innovate and improve our app, and
            make a meaningful contribution to the open-source software
            development community.
          </p>
          <div className="d-flex  flex-column justify-content-center mt-6 align-items-center">
            Checkout our Sponsors
            <Icon
              icon="solar:square-arrow-down-outline"
              fontSize={40}
              onClick={() => ref.current?.scrollIntoView({ smooth: true })}
              style={{ cursor: "pointer" }}
              className="mt-2 text-primary"
            />
          </div>
        </div>
      </section>
      <div className="has-divider">
        <div className="divider flip-x bg-primary-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="96px"
            viewBox="0 0 100 100"
            version="1.1"
            preserveAspectRatio="none"
            className="injected-svg"
            data-src="/assets/img/dividers/divider-3.svg"
          >
            <path d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"></path>
          </svg>
        </div>
      </div>
      <section id="sponsors" ref={ref}>
        <Contributors />
      </section>
    </>
  );
};
