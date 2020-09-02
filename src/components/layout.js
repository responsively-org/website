import React from "react"
import { Link } from "gatsby"

//import { rhythm, scale } from "../utils/typography"
import Header from "./header"

import '../assets/theme-desktop-app.scss';
import Footer from "./footer";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
