import React from "react";
import Footer from "gatsby-theme-carbon/src/components/Footer";

const Content = ({ buildTime }) => <p>Last updated: {buildTime}</p>;

const links = {
  firstCol: [
    {
      href: "https://reactjs.org/docs/hooks-intro.html",
      linkText: "Hooks documentation",
    },
    { href: "https://ibm.com/design", linkText: "Other resources" },
    { href: "https://ibm.com/design", linkText: "Other resources" },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
