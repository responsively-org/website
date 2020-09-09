import React from "react";

import Header from "./header";

import "../assets/theme-desktop-app.scss";
import Footer from "./footer";

const Layout = ({ location, title, children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
